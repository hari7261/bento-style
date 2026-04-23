import React from 'react';
import { cn } from '../utils/cn';

export interface BentoGridFProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BentoGridF = React.forwardRef<HTMLDivElement, BentoGridFProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-8 bg-[#0a0a0a]", className)}
        {...props}
      >
        {/* Top Section */}
        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between group">
           <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6">Expertise</div>
           <h3 className="text-3xl font-black text-white tracking-tight">Technical Mastery</h3>
           <div className="mt-8 grid grid-cols-4 gap-4">
              {['Re', 'Ts', 'Nx', 'Tw', 'Fm', 'Gs', 'Nd', 'Pr'].map((s) => (
                <div key={s} className="aspect-square bg-white/5 rounded-xl border border-white/5 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-white hover:border-white/20 transition-all cursor-default">
                   {s}
                </div>
              ))}
           </div>
        </div>

        <div className="bento-card p-10 flex flex-col justify-center items-center text-center">
           <div className="text-5xl font-black text-white tracking-tighter">06<span className="text-indigo-500">+</span></div>
           <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">Years Exp.</div>
        </div>

        <div className="bento-card p-10 flex flex-col justify-center items-center text-center">
           <div className="text-5xl font-black text-white tracking-tighter">500<span className="text-blue-500">+</span></div>
           <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">Commits/Mo</div>
        </div>

        {/* Large Middle Section */}
        <div className="md:col-span-4 bento-card p-10 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-[#141414] to-[#0d0d0d]">
           <div className="flex-1 space-y-6">
              <div className="px-4 py-1.5 bg-indigo-600/10 border border-indigo-500/20 rounded-full w-fit text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                 Top Rated Developer
              </div>
              <h3 className="text-5xl font-black text-white tracking-tighter leading-none">Crafting Digital<br/>Experiences.</h3>
              <p className="text-gray-500 text-lg font-medium max-w-xl leading-relaxed">
                 Helping brands stand out in the digital age with premium design and high-performance development.
              </p>
           </div>
           <div className="w-64 h-64 bg-white/5 rounded-[3rem] border border-white/5 p-4 rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl overflow-hidden group">
              <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Pragadesh" alt="Abstract" className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-1000" />
           </div>
        </div>

        {/* Bottom Section */}
        <div className="md:col-span-2 bento-card p-10">
           <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-8">Client Success</div>
           <div className="space-y-6">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl"></div>
                    <div className="text-sm font-bold text-white">Global Brands</div>
                 </div>
                 <div className="text-xs font-black text-green-500">99% Success</div>
              </div>
              <div className="h-px bg-white/5"></div>
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl"></div>
                    <div className="text-sm font-bold text-white">Startup Scale</div>
                 </div>
                 <div className="text-xs font-black text-blue-500">20+ Launched</div>
              </div>
           </div>
        </div>

        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between">
           <div className="flex justify-between items-start">
              <div>
                 <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Contact</div>
                 <h4 className="text-2xl font-black text-white">Start a Project</h4>
              </div>
              <button className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                 →
              </button>
           </div>
           <div className="mt-8 flex gap-4">
              <span className="text-xs font-medium text-gray-500 underline cursor-pointer hover:text-white transition-colors">hello@pragadesh.dev</span>
              <span className="text-xs font-medium text-gray-500 underline cursor-pointer hover:text-white transition-colors">Download CV</span>
           </div>
        </div>
      </div>
    );
  }
);

BentoGridF.displayName = 'BentoGridF';
