// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw } from "lucide-react";


export type PauseOverlayActionId = "resume-game-1" | "restart-module-2" | "return-to-terminal-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Mock Background (Simulating the Game Board) */}
      <div className="absolute inset-0 grid grid-cols-12 gap-grid-gutter p-container-margin opacity-30 pointer-events-none" style={{backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.05) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255,255,255,0.05) 20px)"}}>
      {/* Background Elements to blur */}
      <div className="col-span-3 bg-surface-container border border-outline-variant h-full rounded"></div>
      <div className="col-span-6 bg-surface border border-outline-variant h-full rounded flex items-end justify-center pb-8">
      {/* Mock Tetris Blocks */}
      <div className="w-10 h-10 bg-primary-container opacity-50 m-1"></div>
      <div className="w-10 h-10 bg-primary-container opacity-50 m-1"></div>
      <div className="w-10 h-10 bg-secondary-container opacity-50 m-1"></div>
      </div>
      <div className="col-span-3 bg-surface-container border border-outline-variant h-full rounded"></div>
      </div>
      {/* Pause Overlay (Glassmorphism) */}
      <div className="absolute inset-0 bg-surface/70 backdrop-blur-md flex flex-col items-center justify-center z-50">
      {/* Pause Menu Container */}
      <div className="flex flex-col items-center max-w-md w-full px-container-margin">
      {/* Header */}
      <div className="mb-unit-8 flex flex-col items-center">
      <Circle  style={{fontSize: "64px"}} className="text-primary-container mb-unit-4" aria-hidden={true} focusable="false" />
      <h1 className="font-display-lg text-display-lg text-on-surface tracking-widest uppercase">Paused</h1>
      <div className="h-px w-32 bg-primary-container mt-unit-2"></div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col w-full gap-unit-4">
      {/* Resume Button (Primary) */}
      <button className="w-full bg-primary-container text-surface-container-lowest font-label-md text-label-md uppercase py-unit-4 px-unit-6 rounded flex items-center justify-center gap-unit-2 hover:bg-primary-fixed hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-primary-container transition-colors" type="button" data-action-id="resume-game-1" onClick={actions?.["resume-game-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Resume Game
                      </button>
      {/* Restart Button (Secondary) */}
      <button className="w-full bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md uppercase py-unit-4 px-unit-6 rounded flex items-center justify-center gap-unit-2 hover:bg-surface-variant hover:border-primary-container transition-colors" type="button" data-action-id="restart-module-2" onClick={actions?.["restart-module-2"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
                          Restart Module
                      </button>
      {/* Return to Menu Button (Secondary/Destructive intent but styled neutrally here per design system) */}
      <button className="w-full bg-surface-container border border-outline-variant text-on-surface-variant font-label-md text-label-md uppercase py-unit-4 px-unit-6 rounded flex items-center justify-center gap-unit-2 hover:bg-surface-variant hover:text-on-surface transition-colors mt-unit-4" type="button" data-action-id="return-to-terminal-3" onClick={actions?.["return-to-terminal-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Return to Terminal
                      </button>
      </div>
      {/* System Status indicator (Flavor) */}
      <div className="mt-unit-8 flex items-center gap-unit-2">
      <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></div>
      <span className="font-label-sm text-label-sm text-outline">SYSTEM STANDBY</span>
      </div>
      </div>
      </div>
    </>
  );
}
