// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "initiate-sequence-4" | "pause-5" | "restart-6";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary border-b border-outline-variant flex justify-between items-center w-full px-unit-6 h-16 max-w-full docked full-width top-0 z-50">
      <div className="flex items-center gap-unit-4">
      <span className="font-display-lg text-headline-md tracking-tighter text-primary uppercase">Tetris Supervisor</span>
      </div>
      <div className="flex items-center gap-unit-4 hidden md:flex">
      {/* Active state example for navigation */}
      <a className="text-secondary font-bold border-b-2 border-secondary font-label-md text-label-md py-5 hover:bg-surface-variant hover:text-primary transition-colors duration-150" href="#">Telemetry</a>
      </div>
      <div className="flex items-center gap-unit-4">
      <button className="text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors duration-150 p-2 rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors duration-150 p-2 rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors duration-150 p-2 rounded" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 relative">
      {/* SideNavBar */}
      <nav className="bg-surface-container-lowest dark:bg-surface-container-lowest text-secondary border-r border-outline-variant fixed left-0 top-16 bottom-0 flex flex-col p-unit-4 z-40 docked h-full w-64 hidden lg:flex">
      <div className="mb-unit-8">
      <div className="flex items-center gap-unit-4 mb-unit-2">
      <img alt="Supervisor Profile" className="w-10 h-10 rounded border border-outline" data-alt="A highly stylized, minimalist cyberpunk avatar portrait. High contrast lighting with neon blue and cyan accents against a deep dark background. Corporate supervisor aesthetic mixed with 80s arcade nostalgia. Professional but intense expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC9dmMVDmWATvS8rqsa6zTa6QGN1hehLhRTfOGbxG6OuJ-8tSXK7QhYyAn5yM9sz1eGbrrKp-IstIUx9EXD40cUvXNVNe0VMZz6dTmD8Pa_RlxO1SlD9jhKaxZuZVSS-vqBLlRoeQzB2DhoXIWtK18axo7cqc2OrKte5midBIlxZOufA8gCTtSxB2nEWzc1ewGbLpMCGqcTsuoZxvnpTNSjIhQb2abAoqN0oLgrQ6CB34T1SzaX9sHEZN0HP8Eg8Jg4zNtoD9V4Vu3" />
      <div>
      <h2 className="font-headline-md text-label-md text-primary">Station 01</h2>
      <p className="font-label-sm text-label-sm text-secondary">System Nominal</p>
      </div>
      </div>
      </div>
      <div className="flex flex-col gap-unit-2 flex-1">
      <a className="flex items-center gap-unit-4 p-unit-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded font-label-sm text-label-sm" href="#">
      <Circle aria-hidden={true} focusable="false" /> Next Piece
                      </a>
      <a className="flex items-center gap-unit-4 p-unit-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded font-label-sm text-label-sm" href="#">
      <Circle aria-hidden={true} focusable="false" /> Held Piece
                      </a>
      <a className="flex items-center gap-unit-4 p-unit-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded font-label-sm text-label-sm" href="#">
      <Circle aria-hidden={true} focusable="false" /> Statistics
                      </a>
      <a className="flex items-center gap-unit-4 p-unit-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded font-label-sm text-label-sm" href="#">
      <Circle aria-hidden={true} focusable="false" /> Leaderboard
                      </a>
      <a className="flex items-center gap-unit-4 p-unit-2 bg-secondary-container text-on-secondary-container font-bold rounded-lg border-l-4 border-secondary font-label-sm text-label-sm" href="#">
      <Circle aria-hidden={true} focusable="false" /> Telemetry
                      </a>
      </div>
      <div className="mt-auto flex flex-col gap-unit-2 pt-unit-4 border-t border-outline-variant">
      <a className="flex items-center gap-unit-4 p-unit-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded font-label-sm text-label-sm" href="#">
      <Settings aria-hidden={true} focusable="false" /> Settings
                      </a>
      <a className="flex items-center gap-unit-4 p-unit-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors duration-200 rounded font-label-sm text-label-sm" href="#">
      <Circle aria-hidden={true} focusable="false" /> Manual
                      </a>
      <button className="mt-unit-4 bg-primary-container text-on-primary-container font-label-md text-label-md py-unit-2 px-unit-4 rounded border border-transparent hover:brightness-110 hover:border-b-2 hover:border-r-2 transition-colors w-full uppercase" type="button" data-action-id="initiate-sequence-4" onClick={actions?.["initiate-sequence-4"]}>INITIATE_SEQUENCE</button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-unit-4 md:p-unit-8 flex flex-col lg:flex-row gap-grid-gutter justify-center items-start min-h-[calc(100vh-64px-48px)]">
      {/* Left Telemetry Panel */}
      <div className="w-full lg:w-64 flex flex-col gap-unit-4 order-2 lg:order-1">
      {/* Held Piece Module */}
      <div className="bg-surface-container border border-outline-variant rounded p-unit-4 flex flex-col gap-unit-2">
      <div className="border-b border-outline-variant pb-unit-1 mb-unit-2 flex justify-between items-center">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Held Piece</h3>
      <Circle className="text-outline text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="h-24 bg-surface-container-lowest border border-outline flex items-center justify-center relative">
      {/* T Piece Graphic representation */}
      <div className="grid grid-cols-3 grid-rows-2 gap-1 w-16 h-10">
      <div className="col-start-2 bg-tetris-t border border-tetris-t opacity-80"></div>
      <div className="col-start-1 row-start-2 bg-tetris-t border border-tetris-t opacity-80"></div>
      <div className="col-start-2 row-start-2 bg-tetris-t border border-tetris-t opacity-80"></div>
      <div className="col-start-3 row-start-2 bg-tetris-t border border-tetris-t opacity-80"></div>
      </div>
      </div>
      </div>
      {/* Statistics Module */}
      <div className="bg-surface-container border border-outline-variant rounded p-unit-4 flex flex-col gap-unit-2">
      <div className="border-b border-outline-variant pb-unit-1 mb-unit-2 flex justify-between items-center">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Telemetry Stats</h3>
      <Circle className="text-outline text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex justify-between items-end mb-unit-2">
      <span className="font-label-sm text-label-sm text-outline">SCORE</span>
      <span className="font-label-md text-label-md text-primary">024,590</span>
      </div>
      <div className="flex justify-between items-end mb-unit-2">
      <span className="font-label-sm text-label-sm text-outline">LINES</span>
      <span className="font-label-md text-label-md text-on-surface">112</span>
      </div>
      <div className="flex justify-between items-end mb-unit-2">
      <span className="font-label-sm text-label-sm text-outline">LEVEL</span>
      <span className="font-label-md text-label-md text-secondary">08</span>
      </div>
      <div className="mt-unit-2 pt-unit-2 border-t border-outline-variant border-dashed">
      <div className="flex items-center gap-2 mb-1">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">SYS: NOMINAL</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-tetris-o"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">APM: 45</span>
      </div>
      </div>
      </div>
      </div>
      {/* Central Game Board (The Matrix) */}
      <div className="w-full max-w-[320px] md:max-w-[400px] flex flex-col items-center order-1 lg:order-2 mx-auto">
      <div className="bg-surface-container-lowest border-2 border-outline-variant p-2 rounded-sm shadow-[0_0_15px_rgba(56,189,248,0.1)]">
      {/* 10x20 Grid */}
      <div className="w-[240px] h-[480px] bg-background border border-outline matrix-bg relative overflow-hidden">
      {/* Placed Blocks (Example) */}
      <div className="absolute bottom-0 w-full h-[10%] flex">
      <div className="w-[10%] h-full bg-tetris-s border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-tetris-s border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-surface-variant border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-tetris-o border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-tetris-o border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-tetris-i border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-tetris-i border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-tetris-i border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-tetris-i border border-surface-container-lowest"></div>
      <div className="w-[10%] h-full bg-surface-variant border border-surface-container-lowest"></div>
      </div>
      {/* Active Falling Block */}
      <div className="absolute top-[20%] left-[40%] w-[30%] h-[10%] grid grid-cols-3 grid-rows-2">
      <div className="col-start-1 row-start-1 bg-tetris-j border border-surface-container-lowest shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
      <div className="col-start-1 row-start-2 bg-tetris-j border border-surface-container-lowest shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
      <div className="col-start-2 row-start-2 bg-tetris-j border border-surface-container-lowest shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
      <div className="col-start-3 row-start-2 bg-tetris-j border border-surface-container-lowest shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
      </div>
      {/* Ghost Piece */}
      <div className="absolute bottom-[10%] left-[40%] w-[30%] h-[10%] grid grid-cols-3 grid-rows-2 opacity-50">
      <div className="col-start-1 row-start-1 border border-dashed border-tetris-j"></div>
      <div className="col-start-1 row-start-2 border border-dashed border-tetris-j"></div>
      <div className="col-start-2 row-start-2 border border-dashed border-tetris-j"></div>
      <div className="col-start-3 row-start-2 border border-dashed border-tetris-j"></div>
      </div>
      </div>
      </div>
      {/* Core Controls */}
      <div className="w-full mt-unit-4 flex justify-between gap-unit-2">
      <button className="flex-1 border border-outline text-on-surface hover:bg-surface-variant hover:border-primary-container font-label-md text-label-md py-unit-2 rounded transition-colors" type="button" data-action-id="pause-5" onClick={actions?.["pause-5"]}>PAUSE</button>
      <button className="flex-1 bg-primary-container text-on-primary-container border border-transparent hover:brightness-110 font-label-md text-label-md py-unit-2 rounded transition-colors shadow-[2px_2px_0px_rgba(51,65,85,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_rgba(51,65,85,1)]" type="button" data-action-id="restart-6" onClick={actions?.["restart-6"]}>RESTART</button>
      </div>
      </div>
      {/* Right Telemetry Panel */}
      <div className="w-full lg:w-64 flex flex-col gap-unit-4 order-3">
      {/* Next Piece Module */}
      <div className="bg-surface-container border border-outline-variant rounded p-unit-4 flex flex-col gap-unit-2">
      <div className="border-b border-outline-variant pb-unit-1 mb-unit-2 flex justify-between items-center">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Next Sequence</h3>
      <Circle className="text-outline text-sm" aria-hidden={true} focusable="false" />
      </div>
      {/* Next 1 */}
      <div className="h-20 bg-surface-container-lowest border border-outline flex items-center justify-center mb-unit-2 relative border-l-2 border-l-tetris-i">
      <div className="grid grid-cols-4 gap-1 w-20 h-4">
      <div className="bg-tetris-i border border-tetris-i opacity-90"></div>
      <div className="bg-tetris-i border border-tetris-i opacity-90"></div>
      <div className="bg-tetris-i border border-tetris-i opacity-90"></div>
      <div className="bg-tetris-i border border-tetris-i opacity-90"></div>
      </div>
      </div>
      {/* Next 2 & 3 smaller */}
      <div className="flex gap-unit-2">
      <div className="flex-1 h-16 bg-surface-container-lowest border border-outline flex items-center justify-center opacity-60">
      <div className="grid grid-cols-2 grid-rows-2 gap-1 w-8 h-8">
      <div className="bg-tetris-o border border-tetris-o"></div>
      <div className="bg-tetris-o border border-tetris-o"></div>
      <div className="bg-tetris-o border border-tetris-o"></div>
      <div className="bg-tetris-o border border-tetris-o"></div>
      </div>
      </div>
      <div className="flex-1 h-16 bg-surface-container-lowest border border-outline flex items-center justify-center opacity-40">
      <div className="grid grid-cols-3 grid-rows-2 gap-[2px] w-8 h-6">
      <div className="col-start-2 bg-tetris-s border border-tetris-s"></div>
      <div className="col-start-3 bg-tetris-s border border-tetris-s"></div>
      <div className="col-start-1 row-start-2 bg-tetris-s border border-tetris-s"></div>
      <div className="col-start-2 row-start-2 bg-tetris-s border border-tetris-s"></div>
      </div>
      </div>
      </div>
      </div>
      {/* System Logs / Mini Console */}
      <div className="bg-surface-container border border-outline-variant rounded p-unit-4 flex flex-col gap-unit-2 flex-1">
      <div className="border-b border-outline-variant pb-unit-1 mb-unit-2 flex justify-between items-center">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase">Event Log</h3>
      <Circle className="text-outline text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-sm text-label-sm text-outline font-mono flex flex-col gap-1 overflow-y-auto max-h-32">
      <div className="flex gap-2"><span className="text-secondary">[08:42:11]</span> <span>Game initialized.</span></div>
      <div className="flex gap-2"><span className="text-secondary">[08:42:12]</span> <span>Grid clear.</span></div>
      <div className="flex gap-2"><span className="text-secondary">[08:44:05]</span> <span>Line clear (x1).</span></div>
      <div className="flex gap-2"><span className="text-tetris-o">[08:45:22]</span> <span>Stack height warning.</span></div>
      <div className="flex gap-2"><span className="text-primary-container">[08:46:10]</span> <span>TETRIS achieved.</span></div>
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
      <a className="text-on-surface-variant hover:text-secondary transition-opacity duration-300" href="#">Support</a>
      </div>
      </footer>
    </>
  );
}
