// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, TriangleAlert } from "lucide-react";


export type GameOverActionId = "initiate-replay-1" | "return-to-terminal-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Ambient HUD Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      <div className="absolute w-[800px] h-[800px] bg-error rounded-full opacity-5 blur-[150px]"></div>
      </div>
      {/* Main Game Over Container */}
      <main className="relative z-10 w-full max-w-2xl bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl p-unit-8 flex flex-col items-center gap-unit-8 shadow-[0_0_40px_rgba(255,180,171,0.1)]">
      {/* Header */}
      <div className="text-center w-full border-b border-outline-variant pb-unit-6">
      <h1 className="font-display-lg text-display-lg text-error uppercase tracking-tighter mb-unit-2" style={{textShadow: "0 0 20px rgba(255,180,171,0.5)"}}>Game Over</h1>
      <p className="font-label-md text-label-md text-on-surface-variant flex items-center justify-center gap-unit-2">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error" aria-hidden={true} focusable="false" />
                      SUPERVISOR SESSION TERMINATED
                      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error" aria-hidden={true} focusable="false" />
      </p>
      </div>
      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-4 w-full">
      {/* Final Score (Hero Stat) */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-unit-6 flex flex-col items-center justify-center col-span-1 md:col-span-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-unit-2">Final Score</h2>
      <div className="font-display-lg text-display-lg text-primary">1,420,050</div>
      {/* High Score Comparison */}
      <div className="mt-unit-4 flex items-center gap-unit-2 bg-surface-container-high px-unit-4 py-unit-2 rounded-full border border-outline-variant">
      <Circle className="text-secondary text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-on-surface">Personal Best: 1,850,200</span>
      </div>
      </div>
      {/* Level Reached */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-unit-6 flex flex-col items-center justify-center relative group hover:border-secondary transition-colors">
      <Circle className="text-secondary text-opacity-20 text-[64px] absolute right-unit-4 bottom-unit-4 pointer-events-none" aria-hidden={true} focusable="false" />
      <h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-unit-2">Level Reached</h2>
      <div className="font-headline-lg text-headline-lg text-secondary">24</div>
      </div>
      {/* Lines Cleared */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-unit-6 flex flex-col items-center justify-center relative group hover:border-primary-container transition-colors">
      <Circle className="text-primary-container text-opacity-20 text-[64px] absolute left-unit-4 bottom-unit-4 pointer-events-none" aria-hidden={true} focusable="false" />
      <h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-unit-2">Lines Cleared</h2>
      <div className="font-headline-lg text-headline-lg text-primary-container">235</div>
      </div>
      {/* Detailed Stats Array */}
      <div className="col-span-1 md:col-span-2 bg-surface-container border border-outline-variant rounded-lg p-unit-4">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant pb-unit-2 mb-unit-4">PERFORMANCE TELEMETRY</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-unit-4">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Tetris Clears</span>
      <span className="font-label-md text-label-md text-on-surface mt-unit-1">15</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">T-Spins</span>
      <span className="font-label-md text-label-md text-on-surface mt-unit-1">8</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Max Combo</span>
      <span className="font-label-md text-label-md text-on-surface mt-unit-1">6</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Session Time</span>
      <span className="font-label-md text-label-md text-on-surface mt-unit-1">14:22</span>
      </div>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-unit-4 w-full mt-unit-4">
      <button className="flex-1 bg-primary-container text-[#000000] font-label-md text-label-md py-unit-4 px-unit-6 rounded flex items-center justify-center gap-unit-2 hover:bg-primary-fixed hover:-translate-y-px hover:shadow-[0_2px_0_0_#0ea5e9] transition-colors border border-transparent" type="button" data-action-id="initiate-replay-1" onClick={actions?.["initiate-replay-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      INITIATE REPLAY
                  </button>
      <button className="flex-1 bg-surface-container border border-outline text-on-surface font-label-md text-label-md py-unit-4 px-unit-6 rounded flex items-center justify-center gap-unit-2 hover:bg-surface-variant hover:border-outline-variant transition-colors" type="button" data-action-id="return-to-terminal-2" onClick={actions?.["return-to-terminal-2"]}>
      <Menu aria-hidden={true} focusable="false" />
                      RETURN TO TERMINAL
                  </button>
      </div>
      </main>
    </>
  );
}
