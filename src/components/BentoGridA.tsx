import React from 'react';
import { cn } from '../utils/cn';

export interface BentoGridAProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BentoGridA = React.forwardRef<HTMLDivElement, BentoGridAProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8 bg-[#0a0a0a]', className)}
        {...props}
      >
        {/* Main Hero Card */}
        <div className="md:col-span-2 bento-card flex flex-col md:flex-row group">
          <div className="flex-1 p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-black text-white mb-4 tracking-tight">Epic Web</h3>
              <p className="text-gray-500 text-xl font-medium leading-relaxed">
                Become a full stack
                <br />
                web developer.
              </p>
            </div>
            <button className="bento-button-primary w-fit mt-8 flex items-center gap-3">
              Visit course <span className="text-lg">-&gt;</span>
            </button>
          </div>
          <div className="flex-1 bento-grid-bg bg-[#0d0d0d] border-l border-[#262626] relative flex items-center justify-center p-12 overflow-hidden">
            <span className="vertical-label">Full Stack Course</span>
            <div className="relative z-10 flex h-56 w-56 items-center justify-center rounded-[3rem] border border-blue-400/20 bg-blue-500/10 shadow-[0_0_80px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-black/30" />
              <div className="relative text-center">
                <div className="text-6xl font-black tracking-tighter text-white">EW</div>
                <div className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">
                  Full Stack
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Epic React */}
        <div className="bento-card group">
          <div className="h-64 bento-grid-bg bg-[#0d0d0d] border-b border-[#262626] relative flex items-center justify-center p-12 overflow-hidden">
            <span className="vertical-label">React Course</span>
            <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700">
              <div className="absolute inset-0 bg-cyan-600/10 blur-[80px] rounded-full" />
              <div className="relative text-5xl font-black text-cyan-200">Re</div>
            </div>
          </div>
          <div className="p-8 flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-bold text-white mb-1">Epic React</h4>
              <p className="text-gray-500 text-sm font-medium">
                The most comprehensive guide for pros.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/30 transition-all">
              <span className="text-xl">-&gt;</span>
            </div>
          </div>
        </div>

        {/* Testing JS */}
        <div className="bento-card group">
          <div className="h-64 bento-grid-bg bg-[#0d0d0d] border-b border-[#262626] relative flex items-center justify-center p-12 overflow-hidden">
            <span className="vertical-label">Testing Course</span>
            <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[2.5rem] border border-yellow-400/20 bg-yellow-500/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
              <div className="absolute inset-0 bg-yellow-600/10 blur-[80px] rounded-full" />
              <div className="relative text-5xl font-black text-yellow-200">JS</div>
            </div>
          </div>
          <div className="p-8 flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-bold text-white mb-1">Testing JavaScript</h4>
              <p className="text-gray-500 text-sm font-medium">
                Learn smart, efficient testing methods.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/30 transition-all">
              <span className="text-xl">-&gt;</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

BentoGridA.displayName = 'BentoGridA';
