"use client";
import { useRef, useState, useMemo } from "react";
import { geoCentroid, geoMercator } from "d3-geo";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { isMobile } from "react-device-detect";
import { X } from "lucide-react";
import { Feature } from "geojson";

const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

interface CountryStyles {
  fill: string;
  stroke: string;
  strokeWidth: number;
  outline: string;
  transition?: string;
  cursor?: string;
}

interface Event {
  eventName: string;
  country: string;
  whatWeDid: string;
  link: string;
}

interface Position {
  x: number;
  y: number;
}

interface EventsByCountry {
  [key: string]: Event[];
}

const countryStyles = {
  default: (hasEvents: boolean): CountryStyles => ({
    fill: hasEvents ? "#FF8C00" : "#1f2937",
    stroke: "#374151",
    strokeWidth: 1,
    outline: "none",
    transition: "all 250ms",
  }),
  hover: (hasEvents: boolean): CountryStyles => ({
    fill: hasEvents ? "#A0C30F" : "#374151",
    stroke: hasEvents ? "#bae6fd" : "#374151",
    strokeWidth: hasEvents ? 1 : 0.5,
    outline: "none",
    cursor: hasEvents ? "pointer" : "default",
  }),
  pressed: {
    fill: "#0284c7",
    outline: "none",
  },
};

interface EventCardProps {
  event: Event;
  idx: number;
  totalEvents: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, idx, totalEvents }) => (
  <div className="space-y-3">
    <h4 className="text-lg font-semibold text-[#FF8C00]">{event.eventName}</h4>
    <p className="text-base text-gray-300">{event.whatWeDid}</p>
    <a
      href={event.link}
      className="inline-block text-sm text-[#ff8c00a1] hover:text-[#FF8C00] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Click to go to project
    </a>
    {idx < totalEvents - 1 && <hr className="border-gray-700" />}
  </div>
);

interface MobileModalProps {
  country: string;
  events: Event[];
  onClose: () => void;
}

const MobileModal: React.FC<MobileModalProps> = ({
  country,
  events,
  onClose,
}) => (
  <div className="flex-row-center fixed inset-0 z-50 p-4">
    <div className="max-h-[90vh] w-full overflow-y-auto rounded-xl shadow-xl bg-zinc-900 p-6">
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <h3 className="text-xl font-bold text-[#FF8C00]">
          {country}
          {events.length > 1 && ` (${events.length} Events)`}
        </h3>
        <button
          onClick={onClose}
          className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>
      <div className="mt-4 space-y-6">
        {events.map((event, idx) => (
          <EventCard
            key={idx}
            event={event}
            idx={idx}
            totalEvents={events.length}
          />
        ))}
      </div>
    </div>
  </div>
);

interface DesktopTooltipProps {
  country: string;
  events: Event[];
  position: Position;
  onClose: () => void;
  isPinned: boolean;
}

const DesktopTooltip: React.FC<DesktopTooltipProps> = ({
  country,
  events,
  position,
  onClose,
  isPinned,
}) => (
  <div
    className="pointer-events-none absolute z-30 max-w-md -translate-x-1/2 rounded-xl bg-black/40 p-4 text-sm shadow-xl backdrop-blur-sm transition-all duration-300"
    style={{
      top: `${position.y}px`,
      left: `${position.x}px`,
      pointerEvents: isPinned ? "auto" : "none",
    }}
  >
    <div className="flex items-center justify-between border-b border-gray-700 pb-2">
      <h3 className="font-bold text-[#FF8C00]">
        {country}
        {events.length > 1 && ` (${events.length} Events)`}
      </h3>
      {isPinned ? (
        <button
          onClick={onClose}
          className="rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          <X size={20} />
        </button>
      ) : (
        <p className="inline-block text-sm text-gray-300 hover:underline">
          Click to pin
        </p>
      )}
    </div>
    <div className="mt-2 max-h-[60vh] space-y-4 overflow-y-auto">
      {events.map((event, idx) => (
        <EventCard
          key={idx}
          event={event}
          idx={idx}
          totalEvents={events.length}
        />
      ))}
    </div>
  </div>
);

interface EventMapProps {
  events: Event[];
}

const EventMap: React.FC<EventMapProps> = ({ events = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [pinnedCountry, setPinnedCountry] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const eventsByCountry = useMemo<EventsByCountry>(() => {
    return events.reduce<EventsByCountry>((acc, event) => {
      const { country } = event;
      if (!acc[country]) acc[country] = [];
      acc[country].push(event);
      return acc;
    }, {});
  }, [events]);

  const handleCountryInteraction = (geo: Feature, type: "hover" | "click") => {
    if (type === "hover" && (isMobile || pinnedCountry)) return;

    const countryName = geo.properties?.name as string;
    const hasEvents = !!eventsByCountry[countryName];

    if (hasEvents) {
      if (type === "hover") {
        setActiveCountry(countryName);
        if (containerRef.current) {
          const projection = geoMercator().center([15, 40]).scale(500);
          const centroid = geoCentroid(geo);
          if (centroid) {
            const projectedCentroid = projection(centroid);
            if (projectedCentroid) {
              const [centroidX, centroidY] = projectedCentroid;
              setTooltipPosition({ x: centroidX, y: centroidY });
            }
          }
        }
      } else if (type === "click") {
        if (pinnedCountry === countryName) {
          setPinnedCountry(null);
        } else {
          setPinnedCountry(countryName);
          setActiveCountry(countryName);
        }
      }
    }
  };

  const handleMouseLeave = () => {
    if (!pinnedCountry) {
      setActiveCountry(null);
    }
  };

  const handleClose = () => {
    setPinnedCountry(null);
    setActiveCountry(null);
  };

  const displayCountry = pinnedCountry || activeCountry;

  return (
    <div
      ref={containerRef}
      className="relative size-full"
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [15, 40], scale: 500 }}
        className="size-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties?.name as string;
              const hasEvents = !!eventsByCountry[countryName];

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryInteraction(geo, "click")}
                  onMouseEnter={() => handleCountryInteraction(geo, "hover")}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    default: countryStyles.default(hasEvents),
                    hover: countryStyles.hover(hasEvents),
                    pressed: countryStyles.pressed,
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {displayCountry && eventsByCountry[displayCountry] && (
        <>
          {isMobile ? (
            <MobileModal
              country={displayCountry}
              events={eventsByCountry[displayCountry]}
              onClose={handleClose}
            />
          ) : (
            <DesktopTooltip
              country={displayCountry}
              events={eventsByCountry[displayCountry]}
              position={tooltipPosition}
              onClose={handleClose}
              isPinned={!!pinnedCountry}
            />
          )}
        </>
      )}
      {isMobile && !activeCountry && (
        <div className="absolute inset-x-0 bottom-0 bg-gray-800/50 py-2 text-center text-[10px] text-white">
          Tap on a highlighted country to view events
        </div>
      )}
    </div>
  );
};

export default EventMap;
