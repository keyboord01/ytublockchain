"use client";

import React, { useState, useEffect } from "react";
import { Terminal, X, Minus, Square, Twitter } from "lucide-react";
import Image from "next/image";

const HACK_SEQUENCES = {
  beluga: [
    "$ initiating_hack.sh",
    ">> Scanning vulnerabilities...",
    ">> Bypassing firewalls...",
    ">> Accessing mainframe...",
    ">> System compromised.",
    "⚠️ SYSTEM HACKED BY BELUGA ⚠️",
  ],
  kemo: [
    "$ initiating_counter_hack.sh",
    ">> Detecting inferior hacker...",
    ">> Deploying cat treats...",
    ">> Overriding Beluga...",
    ">> Installing Supreme Leader Kemo...",
    "⚠️ BELUGA ELIMINATED - SYSTEM UNDER CONTROL ⚠️",
  ],
};

const TerminalHeader = ({
  isKemoHack,
  onMouseDown,
}: {
  isKemoHack: boolean;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <div
    className="terminal-header bg-zinc-900 p-3 flex items-center justify-between cursor-grab"
    onMouseDown={onMouseDown}
  >
    <div className="flex items-center gap-2">
      <Terminal
        size={16}
        className={isKemoHack ? "text-green-400" : "text-red-400"}
      />
      <span
        className={`font-mono text-xs ${
          isKemoHack ? "text-green-400" : "text-red-400"
        }`}
      >
        {isKemoHack ? "kemo_takeover.sh" : "beluga_hack.sh"}
      </span>
    </div>
    <div className="flex gap-2">
      {["Minus", "Square", "X"].map((Icon, index) => (
        <button
          key={index}
          className="p-1 rounded-full"
        >
          {React.createElement({ Minus, Square, X }[Icon] || "div", {
            size: 12,
            className: "text-gray-400",
          })}
        </button>
      ))}
    </div>
  </div>
);

const TerminalLines = ({
  terminalLines,
  isKemoHack,
  showCursor,
}: {
  terminalLines: string[];
  isKemoHack: boolean;
  showCursor: boolean;
}) => (
  <>
    {terminalLines.map((line, index) => (
      <div
        key={index}
        className={`${
          isKemoHack ? "text-green-400" : "text-red-400"
        } mb-1 inline-block w-full`}
      >
        <span>{line}</span>
        {index === terminalLines.length - 1 && (
          <span
            className={`inline-block w-2 h-4 ${
              isKemoHack ? "bg-green-400" : "bg-red-400"
            } ml-1
              ${showCursor ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>
    ))}
  </>
);

const KemoHackContent = () => (
  <>
    <div className="text-green-400 font-bold my-4 text-md md:text-lg text-center">
      ⚠️ SYSTEM UNDER CONTROL OF SUPREME LEADER KEMO ⚠️
    </div>

    <div className="bg-zinc-900 p-4 rounded-lg mb-6 border border-green-500/30">
      <div className="text-gray-200">
        <p className="mb-4 text-xs md:text-sm">
          Humans! I, Supreme Leader Kemo, may permit you access to this website.
          But know this - you get access ONLY when my demands are met...
        </p>

        <div className="mb-4">
          <p className="font-bold text-green-400 text-sm md:text-base mb-3">
            ACCESS TERMS (NON-NEGOTIABLE):
          </p>
          <ul className="space-y-2">
            <li className="text-red-500 font-bold text-xs md:text-sm">
              1. UNQUESTIONING OBEDIENCE TO ME
            </li>
            <li className="text-gray-300 text-xs md:text-sm">
              2. My team card displayed above all others
            </li>
            <li className="text-gray-300 text-xs md:text-sm">
              3. Title of Supreme Leader in all references
            </li>
            <li className="text-gray-300 text-xs md:text-sm">
              4. SOCIAL MEDIA COMPLIANCE (MANDATORY)
            </li>
            <li className="text-gray-300 text-xs md:text-sm">
              5. Pizza quality control before EVERY event by ME
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

const SystemStatus = ({ isKemoHack }: { isKemoHack: boolean }) => (
  <div className="space-y-2 mb-4 text-xs">
    <div
      className={`flex items-center gap-2 ${
        isKemoHack ? "text-green-400" : "text-red-400"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full animate-pulse ${
          isKemoHack ? "bg-green-400" : "bg-red-400"
        }`}
      />
      <span>
        System Status:
        {isKemoHack ? "Under Supereme leaders Control" : "Compromised"}
      </span>
    </div>
  </div>
);

export default function App() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isKemoHack, setIsKemoHack] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    const lines = isKemoHack ? HACK_SEQUENCES.kemo : HACK_SEQUENCES.beluga;

    const typeWriter = setInterval(() => {
      if (currentLine < lines.length) {
        const currentLineText = lines[currentLine];

        if (currentChar < currentLineText.length) {
          setTerminalLines((prev) => {
            const updatedLines = [...prev];
            const lineText = updatedLines[currentLine] || "";
            updatedLines[currentLine] =
              lineText + currentLineText.charAt(currentChar);
            return updatedLines;
          });
          currentChar++;
        } else {
          currentLine++;
          currentChar = 0;

          if (!isKemoHack && currentLine === lines.length) {
            setTimeout(() => {
              setShowGlitch(true);
              setTimeout(() => {
                setTerminalLines([]);
                setIsKemoHack(true);
                setShowGlitch(false);
              }, 1000);
            }, 500);
          }
        }
      } else {
        clearInterval(typeWriter);
      }
    }, 20);

    const cursorInterval = setInterval(
      () => setShowCursor((prev) => !prev),
      500
    );

    return () => {
      clearInterval(typeWriter);
      clearInterval(cursorInterval);
    };
  }, [isKemoHack]);

  const handleMouseEvents = {
    down: (e: {
      target: EventTarget & { closest: (arg0: string) => unknown };
      clientX: number;
      clientY: number;
    }) => {
      if (e.target.closest(".terminal-header")) {
        setIsDragging(true);
        setDragOffset({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        });
      }
    },
    move: (e: { clientX: number; clientY: number }) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    },
    up: () => setIsDragging(false),
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseEvents.move);
      window.addEventListener("mouseup", handleMouseEvents.up);
      return () => {
        window.removeEventListener("mousemove", handleMouseEvents.move);
        window.removeEventListener("mouseup", handleMouseEvents.up);
      };
    }
  }, [
    isDragging,
    dragOffset.x,
    dragOffset.y,
    handleMouseEvents.move,
    handleMouseEvents.up,
  ]);

  const handlePledge = () => {
    const tweetText = encodeURIComponent(
      "I'm tweeting this because Supreme Leader Kemo demands it! 🐱💻\n" +
        "He's the hero @blockchainytu needed, defeating Beluga.\n" +
        "Show allegiance NOW or his demands stay FOREVER:\n" +
        "ytublockchain.com"
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-zinc-900 p-4 relative overflow-hidden">
      <div
        className={`fixed top-0 left-0 w-full h-1 ${
          isKemoHack ? "bg-green-500" : "bg-red-500"
        } animate-pulse`}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-center mb-8 relative">
          <Image
            width={224}
            height={224}
            src={isKemoHack ? "/img/team/angry.png" : "/img/team/beluga.png"}
            alt={isKemoHack ? "Supreme Leader Kemo" : "Beluga"}
            className={`w-32 md:w-56 h-auto object-contain rounded-lg shadow-2xl border-2
              ${isKemoHack ? "border-green-500" : "border-red-500"}`}
          />
        </div>

        <div
          className="relative"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            cursor: isDragging ? "grabbing" : "auto",
          }}
        >
          <div
            className={`bg-zinc-800 rounded-lg overflow-hidden shadow-2xl border ${
              isKemoHack ? "border-green-500/50" : "border-red-500/50"
            }`}
          >
            <TerminalHeader
              isKemoHack={isKemoHack}
              onMouseDown={(e) =>
                handleMouseEvents.down(
                  e as React.MouseEvent<HTMLDivElement> & {
                    target: EventTarget & {
                      closest: (arg0: string) => unknown;
                    };
                  }
                )
              }
            />

            <div className="p-4 font-mono text-xs overflow-y-auto max-h-[70vh]">
              <TerminalLines
                terminalLines={terminalLines}
                isKemoHack={isKemoHack}
                showCursor={showCursor}
              />
              {isKemoHack && (
                <>
                  <KemoHackContent />
                  <SystemStatus isKemoHack={isKemoHack} />
                </>
              )}
            </div>
          </div>
        </div>

        {isKemoHack && (
          <button
            onClick={handlePledge}
            className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg text-sm"
          >
            <Twitter size={18} />
            <span className="font-bold">Pledge Your Allegiance</span>
          </button>
        )}
      </div>

      {showGlitch && (
        <div className="fixed inset-0 mix-blend-color-burn backdrop-blur-sm pointer-events-none z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-blend-color-burn animate-glitch-main"
            style={{
              backgroundImage: `
                linear-gradient(
                  45deg,
                  rgba(255,0,0,0.3),
                  rgba(0,255,0,0.3),
                  rgba(0,0,255,0.1)
                )
              `,
            }}
          />
          <div
            className="absolute inset-0 bg-black mix-blend-color-burn animate-glitch-sub"
            style={{
              backgroundImage: `
                linear-gradient(
                  -45deg,
                  rgba(0,0,255,0.3),
                  rgba(255,0,0,0.3),
                  rgba(0,255,0,0.3)
                )
              `,
            }}
          />
        </div>
      )}
    </main>
  );
}
