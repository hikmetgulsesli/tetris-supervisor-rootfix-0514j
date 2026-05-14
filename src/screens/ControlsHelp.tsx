// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gavel, Info, MousePointerClick, Settings } from "lucide-react";


export type ControlsHelpActionId = "initiate-sequence-1";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar (Semantic Intent: Manual/Help) */}
      <header className="bg-surface dark:bg-surface text-primary border-b border-outline-variant flex justify-between items-center w-full px-unit-6 h-16 max-w-full docked full-width top-0 z-50">
      <div className="font-display-lg text-headline-md tracking-tighter text-primary uppercase">
                  Tetris Supervisor
              </div>
      <div className="flex items-center gap-unit-4 hidden md:flex">
      <div className="text-on-surface-variant font-medium hover:bg-surface-variant hover:text-primary transition-colors duration-150 px-unit-2 py-unit-1 rounded cursor-pointer flex items-center gap-unit-2">
      <Settings  data-icon="settings" className="text-xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="text-on-surface-variant font-medium hover:bg-surface-variant hover:text-primary transition-colors duration-150 px-unit-2 py-unit-1 rounded cursor-pointer flex items-center gap-unit-2">
      <Circle  data-icon="terminal" className="text-xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="text-on-surface-variant font-medium hover:bg-surface-variant hover:text-primary transition-colors duration-150 px-unit-2 py-unit-1 rounded cursor-pointer flex items-center gap-unit-2">
      <Circle  data-icon="monitor_heart" className="text-xl" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </header>
      <div className="flex flex-1">
      {/* SideNavBar (Manual Active) */}
      <nav className="bg-surface-container-lowest dark:bg-surface-container-lowest text-secondary border-r border-outline-variant fixed left-0 top-16 bottom-0 flex flex-col p-unit-4 z-40 h-full w-64 hidden md:flex">
      <div className="mb-unit-8">
      <div className="font-headline-md text-headline-md text-primary mb-unit-2">Station 01</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">System Nominal</div>
      </div>
      <button className="bg-primary-container text-on-primary-container font-label-md text-label-md py-unit-2 px-unit-4 rounded border border-primary-container hover:bg-primary-fixed transition-colors mb-unit-8 w-full flex justify-center items-center gap-unit-2 uppercase" type="button" data-action-id="initiate-sequence-1" onClick={actions?.["initiate-sequence-1"]}>
                      INITIATE_SEQUENCE
                  </button>
      <ul className="flex flex-col gap-unit-2 flex-1">
      <li className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded px-unit-4 py-unit-2 cursor-pointer flex items-center gap-unit-4">
      <Circle  data-icon="grid_view" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Next Piece</span>
      </li>
      <li className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded px-unit-4 py-unit-2 cursor-pointer flex items-center gap-unit-4">
      <Circle  data-icon="pan_tool" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Held Piece</span>
      </li>
      <li className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded px-unit-4 py-unit-2 cursor-pointer flex items-center gap-unit-4">
      <Circle  data-icon="analytics" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Statistics</span>
      </li>
      <li className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded px-unit-4 py-unit-2 cursor-pointer flex items-center gap-unit-4">
      <Circle  data-icon="military_tech" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Leaderboard</span>
      </li>
      <li className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded px-unit-4 py-unit-2 cursor-pointer flex items-center gap-unit-4">
      <Circle  data-icon="sensors" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Telemetry</span>
      </li>
      </ul>
      <div className="mt-auto flex flex-col gap-unit-2 pt-unit-4 border-t border-outline-variant">
      <div className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded px-unit-4 py-unit-2 cursor-pointer flex items-center gap-unit-4">
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Settings</span>
      </div>
      <div className="bg-secondary-container text-on-secondary-container font-bold rounded-lg px-unit-4 py-unit-2 cursor-pointer flex items-center gap-unit-4 border-l-4 border-secondary">
      <Circle  data-icon="help" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Manual</span>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 p-unit-6 md:ml-64 md:mt-16 flex justify-center w-full">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
      {/* Header Section */}
      <div className="lg:col-span-12 mb-unit-4">
      <h1 className="font-headline-lg text-headline-lg text-primary-fixed mb-unit-2 flex items-center gap-unit-4">
      <Circle  data-icon="menu_book" className="text-4xl" aria-hidden={true} focusable="false" />
                              OPERATOR MANUAL: CONTROLS &amp; PROTOCOLS
                          </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                              Essential directives for maintaining optimal matrix density. Memorize these physical and tactical interfaces to ensure uninterrupted spatial containment.
                          </p>
      </div>
      {/* Keyboard Controls Bento Box */}
      <div className="lg:col-span-8 bg-surface-container rounded-xl border border-outline-variant p-unit-6 flex flex-col gap-unit-6 relative overflow-hidden">
      {/* Glassmorphic HUD overlay hint */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
      <h2 className="font-headline-md text-headline-md text-surface-tint border-b border-outline-variant pb-unit-2 flex items-center gap-unit-2">
      <Circle  data-icon="keyboard" aria-hidden={true} focusable="false" />
                              PRIMARY INTERFACE (KEYBOARD)
                          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-6">
      {/* Movement */}
      <div className="flex flex-col gap-unit-4">
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Navigation</h3>
      <div className="flex items-center gap-unit-4 bg-surface-container-high p-unit-4 rounded border border-outline-variant/50">
      <div className="flex gap-unit-1">
      <kbd className="font-label-md text-label-md bg-surface-container-lowest text-primary border border-outline-variant rounded px-unit-2 py-unit-1 shadow-[0_2px_0_#3e484f] min-w-[32px] text-center">←</kbd>
      <kbd className="font-label-md text-label-md bg-surface-container-lowest text-primary border border-outline-variant rounded px-unit-2 py-unit-1 shadow-[0_2px_0_#3e484f] min-w-[32px] text-center">→</kbd>
      </div>
      <span className="font-body-md text-body-md">Lateral Shift</span>
      </div>
      <div className="flex items-center gap-unit-4 bg-surface-container-high p-unit-4 rounded border border-outline-variant/50">
      <kbd className="font-label-md text-label-md bg-surface-container-lowest text-primary border border-outline-variant rounded px-unit-2 py-unit-1 shadow-[0_2px_0_#3e484f] min-w-[32px] text-center">↓</kbd>
      <span className="font-body-md text-body-md">Soft Drop (Accelerated Descent)</span>
      </div>
      </div>
      {/* Action */}
      <div className="flex flex-col gap-unit-4">
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Manipulation</h3>
      <div className="flex items-center gap-unit-4 bg-surface-container-high p-unit-4 rounded border border-outline-variant/50">
      <kbd className="font-label-md text-label-md bg-surface-container-lowest text-secondary border border-secondary/50 rounded px-unit-2 py-unit-1 shadow-[0_2px_0_#00b954] min-w-[32px] text-center">↑</kbd>
      <span className="font-body-md text-body-md">Rotate Clockwise 90°</span>
      </div>
      <div className="flex items-center gap-unit-4 bg-surface-container-high p-unit-4 rounded border border-outline-variant/50 relative overflow-hidden">
      <div className="absolute inset-0 border-2 border-primary-container rounded opacity-20 pointer-events-none"></div>
      <kbd className="font-label-md text-label-md bg-surface-container-lowest text-primary-container border border-primary-container rounded px-unit-4 py-unit-1 shadow-[0_2px_0_#00668a] min-w-[80px] text-center uppercase">Space</kbd>
      <span className="font-body-md text-body-md font-bold text-primary-container">Hard Drop (Instant Lock)</span>
      </div>
      </div>
      {/* Utility */}
      <div className="md:col-span-2 flex flex-col gap-unit-4 mt-unit-2 pt-unit-4 border-t border-outline-variant/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-unit-4">
      <div className="flex items-center gap-unit-4">
      <kbd className="font-label-md text-label-md bg-surface-container-lowest text-tertiary-fixed border border-outline-variant rounded px-unit-2 py-unit-1 shadow-[0_2px_0_#3e484f] min-w-[32px] text-center">C</kbd>
      <span className="font-body-md text-body-md">Hold/Swap Piece</span>
      </div>
      <div className="flex items-center gap-unit-4">
      <kbd className="font-label-md text-label-md bg-surface-container-lowest text-error border border-error-container rounded px-unit-2 py-unit-1 shadow-[0_2px_0_#93000a] min-w-[32px] text-center">P</kbd>
      <span className="font-body-md text-body-md">Suspend Simulation (Pause)</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Touch Controls Box */}
      <div className="lg:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-unit-6 flex flex-col gap-unit-6">
      <h2 className="font-headline-md text-headline-md text-secondary border-b border-outline-variant pb-unit-2 flex items-center gap-unit-2">
      <MousePointerClick  data-icon="touch_app" aria-hidden={true} focusable="false" />
                              TACTILE INPUT (MOBILE)
                          </h2>
      <div className="flex-1 flex flex-col justify-center gap-unit-6 bg-surface-container-lowest rounded border border-outline-variant/30 p-unit-4">
      <div className="flex items-center gap-unit-4">
      <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-outline-variant">
      <Circle  data-icon="swipe_left" className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <div className="font-label-sm text-label-sm text-primary uppercase">Swipe Left/Right</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Lateral Shift</div>
      </div>
      </div>
      <div className="flex items-center gap-unit-4">
      <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-outline-variant">
      <Circle  data-icon="swipe_down" className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <div className="font-label-sm text-label-sm text-primary uppercase">Swipe Down</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Hard Drop</div>
      </div>
      </div>
      <div className="flex items-center gap-unit-4">
      <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-secondary border-dashed">
      <Circle  data-icon="tap_and_play" className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <div className="font-label-sm text-label-sm text-secondary uppercase">Single Tap</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Rotate 90°</div>
      </div>
      </div>
      <div className="mt-auto pt-unit-4 border-t border-outline-variant/50">
      <div className="font-label-sm text-label-sm text-on-surface-variant flex items-start gap-unit-2">
      <Info  data-icon="info" className="text-sm mt-0.5" aria-hidden={true} focusable="false" />
      <span>HUD buttons are provided for Hold and Pause functions on tactile interfaces.</span>
      </div>
      </div>
      </div>
      </div>
      {/* Rules & Scoring Module */}
      <div className="lg:col-span-12 bg-surface-container rounded-xl border border-outline-variant p-unit-6 mt-unit-4">
      <h2 className="font-headline-md text-headline-md text-primary-fixed border-b border-outline-variant pb-unit-2 mb-unit-6 flex items-center gap-unit-2">
      <Gavel  data-icon="gavel" aria-hidden={true} focusable="false" />
                              OPERATIONAL DIRECTIVES &amp; YIELD METRICS
                          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-8">
      {/* Rules */}
      <div>
      <h3 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-unit-4 flex items-center gap-unit-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Primary Objective
                                  </h3>
      <ul className="space-y-unit-4 font-body-md text-body-md text-on-surface-variant">
      <li className="flex gap-unit-3">
      <span className="text-primary font-bold">01.</span>
      <span>Manipulate falling Tetrominoes to form solid horizontal lines across the 10x20 matrix.</span>
      </li>
      <li className="flex gap-unit-3">
      <span className="text-primary font-bold">02.</span>
      <span>Completed lines are instantly vaporized, freeing matrix capacity and yielding operational points.</span>
      </li>
      <li className="flex gap-unit-3">
      <span className="text-error font-bold">03.</span>
      <span><strong className="text-error-container">CRITICAL:</strong> If the stacked geometry breaches the upper containment threshold, the simulation terminates (Top Out).</span>
      </li>
      </ul>
      </div>
      {/* Scoring */}
      <div className="bg-surface-container-lowest rounded border border-outline-variant p-unit-4">
      <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-unit-4 border-b border-outline-variant/50 pb-unit-2">
                                      Base Yield Values (Level 1)
                                  </h3>
      <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center py-unit-2 border-b border-outline-variant/30">
      <span className="font-body-md text-body-md text-on-surface">Single Line</span>
      <span className="font-label-md text-label-md text-primary font-bold">100 pts</span>
      </div>
      <div className="flex justify-between items-center py-unit-2 border-b border-outline-variant/30">
      <span className="font-body-md text-body-md text-on-surface">Double Line</span>
      <span className="font-label-md text-label-md text-primary font-bold">300 pts</span>
      </div>
      <div className="flex justify-between items-center py-unit-2 border-b border-outline-variant/30">
      <span className="font-body-md text-body-md text-on-surface">Triple Line</span>
      <span className="font-label-md text-label-md text-primary font-bold">500 pts</span>
      </div>
      <div className="flex justify-between items-center py-unit-2 bg-surface-variant/30 px-unit-2 -mx-unit-2 rounded">
      <span className="font-body-md text-body-md text-secondary font-bold flex items-center gap-unit-2">
      <Circle  data-icon="electric_bolt" className="text-sm" aria-hidden={true} focusable="false" />
                                              TETRIS (4 Lines)
                                          </span>
      <span className="font-label-md text-label-md text-secondary font-extrabold text-lg">800 pts</span>
      </div>
      </div>
      <div className="mt-unit-4 font-label-sm text-label-sm text-on-surface-variant text-right">
                                      * Yields multiply proportionally with Supervisor Level.
                                  </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Footer */}
      <footer className="bg-surface-container-low dark:bg-surface-container-low text-on-surface-variant border-t border-outline-variant w-full py-unit-2 px-unit-6 flex justify-between items-center text-xs docked full-width bottom-0 z-50">
      <div className="font-label-md text-label-md text-primary">
                  © 2024 TETRIS_SUPERVISOR_CORE
              </div>
      <div className="flex gap-unit-4 font-label-sm text-label-sm">
      <a className="text-on-surface-variant hover:text-secondary transition-opacity duration-300" href="#">Protocol</a>
      <a className="text-on-surface-variant hover:text-secondary transition-opacity duration-300" href="#">EULA</a>
      <a className="text-primary underline hover:text-secondary transition-opacity duration-300" href="#">Support</a>
      </div>
      </footer>
    </>
  );
}
