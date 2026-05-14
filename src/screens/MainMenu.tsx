// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "initiate-sequence-1" | "resume-session-station-01-level-12-active-2" | "controls-3" | "settings-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background Grid & Subtle Tetrominos */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <div className="absolute top-20 left-[10%] w-16 h-16 bg-primary-container border border-primary-container rounded shadow-[0_0_15px_rgba(56,189,248,0.5)] transform rotate-12"></div>
      <div className="absolute top-40 left-[10%] w-16 h-16 bg-primary-container border border-primary-container rounded shadow-[0_0_15px_rgba(56,189,248,0.5)] transform rotate-12"></div>
      <div className="absolute top-60 left-[10%] w-16 h-16 bg-primary-container border border-primary-container rounded shadow-[0_0_15px_rgba(56,189,248,0.5)] transform rotate-12"></div>
      <div className="absolute top-80 left-[10%] w-16 h-16 bg-primary-container border border-primary-container rounded shadow-[0_0_15px_rgba(56,189,248,0.5)] transform rotate-12"></div>
      <div className="absolute bottom-20 right-[15%] w-16 h-16 bg-secondary border border-secondary rounded shadow-[0_0_15px_rgba(74,225,118,0.5)] transform -rotate-6"></div>
      <div className="absolute bottom-20 right-[calc(15%+64px)] w-16 h-16 bg-secondary border border-secondary rounded shadow-[0_0_15px_rgba(74,225,118,0.5)] transform -rotate-6"></div>
      <div className="absolute bottom-[calc(5rem+64px)] right-[calc(15%+64px)] w-16 h-16 bg-secondary border border-secondary rounded shadow-[0_0_15px_rgba(74,225,118,0.5)] transform -rotate-6"></div>
      <div className="absolute bottom-[calc(5rem+128px)] right-[calc(15%+64px)] w-16 h-16 bg-secondary border border-secondary rounded shadow-[0_0_15px_rgba(74,225,118,0.5)] transform -rotate-6"></div>
      </div>
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative z-10 p-unit-6 md:p-container-margin">
      <div className="max-w-2xl w-full flex flex-col items-center">
      {/* Title Header */}
      <div className="text-center mb-12">
      <h1 className="font-display-lg text-display-lg text-primary tracking-tighter uppercase mb-4 shadow-primary drop-shadow-[0_0_10px_rgba(142,213,255,0.3)]">
                          Tetris Supervisor
                      </h1>
      <div className="flex items-center justify-center space-x-2">
      <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(74,225,118,0.8)]"></span>
      <span className="font-label-md text-label-md text-secondary">SYSTEM NOMINAL // V.1.0.4</span>
      </div>
      </div>
      {/* Menu Options (Bento-style layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-4 w-full max-w-lg">
      {/* Primary Action: New Game */}
      <button className="col-span-1 md:col-span-2 bg-primary-container text-[#0F172A] border-2 border-primary-container rounded hover:bg-[#5fcfff] hover:-translate-y-[2px] transition-colors duration-150 flex items-center justify-center py-unit-4 px-unit-6 group shadow-[0_4px_14px_0_rgba(56,189,248,0.39)]" type="button" data-action-id="initiate-sequence-1" onClick={actions?.["initiate-sequence-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="mr-3 text-3xl" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-headline-md font-bold tracking-tight">INITIATE SEQUENCE</span>
      </button>
      {/* Secondary Action: Resume */}
      <button className="col-span-1 md:col-span-2 bg-surface-container border border-outline-variant rounded py-unit-4 px-unit-6 flex items-center justify-between hover:bg-surface-variant hover:border-outline hover:-translate-y-[2px] transition-colors duration-150" type="button" data-action-id="resume-session-station-01-level-12-active-2" onClick={actions?.["resume-session-station-01-level-12-active-2"]}>
      <div className="flex items-center">
      <Circle className="text-outline mr-3" aria-hidden={true} focusable="false" />
      <div className="text-left">
      <span className="font-headline-md text-[20px] text-on-surface font-semibold block leading-tight">Resume Session</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Station 01 • Level 12</span>
      </div>
      </div>
      <span className="font-label-md text-label-md text-secondary border border-secondary px-2 py-1 rounded bg-secondary/10">ACTIVE</span>
      </button>
      {/* Tertiary Actions */}
      <button className="bg-surface-container border border-outline-variant rounded py-unit-4 px-unit-6 flex flex-col items-center justify-center hover:bg-surface-variant hover:border-outline hover:-translate-y-[2px] transition-colors duration-150" type="button" data-action-id="controls-3" onClick={actions?.["controls-3"]}>
      <Circle className="text-outline mb-2 text-3xl" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-[18px] text-on-surface font-semibold">Controls</span>
      </button>
      <button className="bg-surface-container border border-outline-variant rounded py-unit-4 px-unit-6 flex flex-col items-center justify-center hover:bg-surface-variant hover:border-outline hover:-translate-y-[2px] transition-colors duration-150" type="button" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings className="text-outline mb-2 text-3xl" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-[18px] text-on-surface font-semibold">Settings</span>
      </button>
      </div>
      </div>
      </main>
      {/* Footer Component */}
      <footer className="bg-surface-container-low dark:bg-surface-container-low docked full-width bottom-0 border-t border-outline-variant flat no shadows w-full py-unit-2 px-unit-6 flex justify-between items-center text-xs relative z-20">
      <div className="font-label-sm text-label-sm text-on-surface-variant">
                  © 2024 TETRIS_SUPERVISOR_CORE
              </div>
      <div className="flex space-x-unit-4">
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-opacity duration-300" href="#">Protocol</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-opacity duration-300" href="#">EULA</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-opacity duration-300" href="#">Support</a>
      </div>
      </footer>
    </>
  );
}
