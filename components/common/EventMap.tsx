"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import { geoCentroid, geoMercator } from "d3-geo";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { isMobile } from "react-device-detect";
import { X } from "lucide-react";
import { Feature } from "geojson";

const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

type CountryStyles = {
  fill: string;
  stroke: string;
  strokeWidth: number;
  outline: string;
  transition?: string;
  cursor?: string;
};

interface Event {
  title: string;
  country: string;
  description: string;
  link: string;
}

type Position = { x: number; y: number };
type EventsByCountry = Record<string, Event[]>;

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

const useMapDimensions = (ref: React.RefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [ref]);

  return dimensions;
};

const EventCard: React.FC<{
  event: Event;
  idx: number;
  totalEvents: number;
}> = ({ event, idx, totalEvents }) => (
  <div className="space-y-3">
    <h4 className="text-lg font-semibold text-[#FF8C00]">{event.title}</h4>
    <p className="text-base text-gray-300">{event.description}</p>
    <a
      href={event.link}
      className="inline-block text-sm text-[#FF8C00a1] hover:text-[#FF8C00] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Click to go to project
    </a>
    {idx < totalEvents - 1 && <hr className="border-gray-700" />}
  </div>
);

const CountryHeader: React.FC<{
  country: string;
  events: Event[];
  className?: string;
}> = ({ country, events, className = "" }) => (
  <h3 className={className}>
    {country}
    {events.length > 1 && ` (${events.length} Events)`}
  </h3>
);

const CloseButton: React.FC<{
  onClick: () => void;
  size?: number;
  padding?: string;
}> = ({ onClick, size = 24, padding = "p-2" }) => (
  <button
    onClick={onClick}
    className={`rounded-full ${padding} text-gray-400 hover:bg-gray-800 hover:text-white`}
  >
    <X size={size} />
  </button>
);

const EventList: React.FC<{ events: Event[]; className?: string }> = ({
  events,
  className,
}) => (
  <div className={className}>
    {events.map((event, idx) => (
      <EventCard
        key={idx}
        event={event}
        idx={idx}
        totalEvents={events.length}
      />
    ))}
  </div>
);

const CountryDetails: React.FC<{
  country: string;
  events: Event[];
  position: Position;
  onClose: () => void;
  isPinned: boolean;
}> = ({ country, events, position, onClose, isPinned }) => {
  if (isMobile) {
    return (
      <div className="flex-row-center fixed inset-0 z-50 p-4">
        <div className="max-h-[90vh] max-w-lg overflow-y-auto rounded-xl shadow-xl bg-zinc-900 p-6">
          <div className="flex items-center justify-between border-b border-gray-700 pb-4">
            <CountryHeader
              country={country}
              events={events}
              className="text-xl font-bold text-[#FF8C00]"
            />
            <CloseButton onClick={onClose} />
          </div>
          <EventList
            events={events}
            className="mt-4 space-y-6"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute z-30 max-w-md -translate-x-1/2 rounded-xl bg-black/40 p-4 text-sm shadow-xl backdrop-blur-sm transition-all duration-300"
      style={{
        top: position.y,
        left: position.x,
        pointerEvents: isPinned ? "auto" : "none",
      }}
    >
      <div className="flex items-center justify-between border-b border-gray-700 pb-2">
        <CountryHeader
          country={country}
          events={events}
          className="font-bold text-[#FF8C00]"
        />
        {isPinned ? (
          <CloseButton
            onClick={onClose}
            size={20}
            padding="p-1"
          />
        ) : (
          <p className="text-sm text-gray-300 hover:underline">Click to pin</p>
        )}
      </div>
      <EventList
        events={events}
        className="mt-2 max-h-[60vh] space-y-4 overflow-y-auto"
      />
    </div>
  );
};

const EventMap: React.FC<{ events: Event[] }> = ({ events = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDimensions = useMapDimensions(containerRef);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [pinnedCountry, setPinnedCountry] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const eventsByCountry = useMemo<EventsByCountry>(
    () =>
      events.reduce(
        (acc, event) => ({
          ...acc,
          [event.country]: [...(acc[event.country] || []), event],
        }),
        {} as EventsByCountry
      ),
    [events]
  );

  const calculateTooltipPosition = (geo: Feature) => {
    if (!containerRef.current) return null;

    const projection = geoMercator()
      .center([15, 40])
      .scale(500)
      .translate([mapDimensions.width / 2, mapDimensions.height / 2]);

    const [x, y] = projection(geoCentroid(geo)) || [0, 0];
    const tooltipWidth = window.innerWidth < 640 ? 300 : 400;
    const adjustedX = Math.max(
      tooltipWidth / 2,
      Math.min(x, mapDimensions.width - tooltipWidth / 2)
    );
    const adjustedY =
      y > mapDimensions.height - 200 ? mapDimensions.height - 200 : y;

    return { x: adjustedX, y: adjustedY };
  };

  const handleCountryInteraction = (geo: Feature, type: "hover" | "click") => {
    const country = geo.properties?.name as string;
    if (!eventsByCountry[country]) return;

    if (type === "click") {
      setPinnedCountry((prev) => (prev === country ? null : country));
    }

    if (type === "hover" && !isMobile && !pinnedCountry) {
      setActiveCountry(country);
      const pos = calculateTooltipPosition(geo);
      if (pos) {
        setTooltipPosition(pos);
      }
    }
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
              const country = geo.properties?.name as string;
              const hasEvents = !!eventsByCountry[country];

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryInteraction(geo, "click")}
                  onMouseEnter={() => handleCountryInteraction(geo, "hover")}
                  onMouseLeave={() => !pinnedCountry && setActiveCountry(null)}
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
        <CountryDetails
          country={displayCountry}
          events={eventsByCountry[displayCountry]}
          position={tooltipPosition}
          onClose={() => {
            setPinnedCountry(null);
            setActiveCountry(null);
          }}
          isPinned={!!pinnedCountry}
        />
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
