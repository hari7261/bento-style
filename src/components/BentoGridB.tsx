import React from 'react';
import { cn } from '../utils/cn';

export interface BentoGridBProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BentoGridB = React.forwardRef<HTMLDivElement, BentoGridBProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-8 bg-[#0a0a0a]", className)}
        {...props}
      >
        {/* Scenarios */}
        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between group h-[320px]">
          <div>
            <h3 className="text-xl font-bold text-white leading-snug">Scenarios made easy with Taipy Studio.</h3>
            <p className="text-gray-500 text-sm mt-3 font-medium">A powerful VS Code extension that unlocks a convenient graphical editor.</p>
          </div>
          <div className="relative mt-8 flex justify-center">
             <div className="flex gap-4">
                <div className="px-5 py-3 bg-[#1a1a1a] border border-[#262626] rounded-2xl flex items-center gap-3 text-xs font-semibold text-gray-300">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div> planning
                </div>
                <div className="px-5 py-3 bg-[#1a1a1a] border border-[#262626] rounded-2xl flex items-center gap-3 text-xs font-semibold text-gray-300">
                   <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div> prediction
                </div>
             </div>
             <div className="absolute -bottom-4 w-full h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent"></div>
          </div>
        </div>

        {/* Tasks Scheduler */}
        <div className="bento-card p-10 flex flex-col justify-between group h-[320px]">
          <div>
            <h3 className="text-xl font-bold text-white">Tasks Scheduler.</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium">Get your methods invoked at a certain time.</p>
          </div>
          <div className="flex justify-center py-4">
             <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                   <circle cx="56" cy="56" r="50" fill="none" stroke="#1a1a1a" strokeWidth="6" />
                   <circle cx="56" cy="56" r="50" fill="none" stroke="#ef4444" strokeWidth="6" strokeDasharray="250 314" strokeLinecap="round" />
                </svg>
                <span className="text-2xl font-mono font-bold text-white">09:16</span>
             </div>
          </div>
        </div>

        {/* Customize Styles */}
        <div className="md:row-span-2 bento-card p-10 flex flex-col justify-between group">
          <div>
            <h3 className="text-xl font-bold text-white">Customize styles.</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium">Enjoy a variety of predefined themes.</p>
          </div>
          <div className="space-y-6 mt-12">
             <div className="bg-[#1a1a1a] p-5 border border-[#262626] rounded-[1.5rem] flex flex-col gap-4">
                <div className="flex gap-2">
                   {['bg-red-500', 'bg-blue-500', 'bg-white', 'bg-gray-500'].map(c => (
                     <div key={c} className={cn("w-3.5 h-3.5 rounded-full cursor-pointer hover:scale-125 transition-transform", c)}></div>
                   ))}
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full w-2/3 bg-blue-500"></div>
                </div>
             </div>
             <button className="w-full py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 rounded-xl text-sm font-bold transition-all">
                Get started
             </button>
             <div className="bg-[#1a1a1a] p-3 border border-[#262626] rounded-xl flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Inter Medium <span className="opacity-40">▼</span>
             </div>
          </div>
        </div>

        {/* Multi-users */}
        <div className="bento-card p-10 flex flex-col justify-between h-[320px]">
          <div>
            <h3 className="text-xl font-bold text-white">Multi-users.</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium">Each end-user has his own state.</p>
          </div>
          <div className="mt-8 relative h-20">
             <div className="absolute top-0 left-0 p-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-[8px] font-bold text-white shadow-xl">
                User 1 <span className="text-red-500 ml-1">●</span>
             </div>
             <div className="absolute top-8 left-12 p-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-[8px] font-bold text-white shadow-xl z-10 scale-110">
                User 2 <span className="text-blue-500 ml-1">●</span>
             </div>
          </div>
        </div>

        {/* Long Jobs */}
        <div className="bento-card p-10 flex flex-col items-center justify-center text-center h-[320px]">
           <h3 className="text-xl font-bold text-white mb-6">Long jobs.</h3>
           <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"></div>
              <button className="relative px-8 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-full text-xs font-black uppercase tracking-widest transition-all">
                Run the task
              </button>
           </div>
        </div>

        {/* Explore Datasets */}
        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between h-[320px]">
           <div>
              <h3 className="text-xl font-bold text-white">Explore datasets with TalkToTaipy.</h3>
              <p className="text-gray-500 text-sm mt-2 font-medium">Leverage LLM-based application to explore datasets using natural languages.</p>
           </div>
           <div className="bg-[#1a1a1a] p-5 border border-[#262626] rounded-2xl flex items-center gap-4 group">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span className="text-gray-400 text-sm font-medium">plot sales by product in chart</span>
              <div className="ml-auto w-0.5 h-5 bg-blue-500 animate-pulse"></div>
           </div>
        </div>
      </div>
    );
  }
);

BentoGridB.displayName = 'BentoGridB';
