import React from 'react';
import { cn } from '../utils/cn';

export interface BentoGridEProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BentoGridE = React.forwardRef<HTMLDivElement, BentoGridEProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-8 bg-[#0a0a0a]", className)}
        {...props}
      >
        {/* Tech Arsenal */}
        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between group">
           <div>
              <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6">Tech Arsenal</div>
              <h3 className="text-3xl font-black text-white tracking-tight mb-8">Modern Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { name: 'Framer', color: 'text-purple-500' },
                   { name: 'Webflow', color: 'text-blue-500' },
                   { name: 'Figma', color: 'text-red-400' },
                   { name: 'Shopify', color: 'text-green-500' }
                 ].map((tech) => (
                   <div key={tech.name} className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer group/item">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-xs font-black text-gray-700 group-hover/item:text-white transition-colors">
                         {tech.name[0]}
                      </div>
                      <span className="text-sm font-bold text-gray-400 group-hover/item:text-white transition-colors">{tech.name}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Services */}
        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between">
           <div>
              <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6">Services</div>
              <h3 className="text-3xl font-black text-white tracking-tight mb-8">Solutions Suite</h3>
              <div className="flex flex-wrap gap-2">
                 {[
                   'Web Development', 'UI/UX Design', 'SEO Strategy',
                   'Branding', 'Mobile Apps', 'Animations'
                 ].map((service) => (
                   <span key={service} className="px-5 py-2.5 bg-[#1a1a1a] border border-white/5 rounded-xl text-[11px] font-black text-gray-500 hover:text-white transition-colors cursor-default">
                      {service}
                   </span>
                 ))}
              </div>
           </div>
           <button className="w-fit px-8 py-3 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 rounded-full text-[11px] font-black uppercase tracking-widest transition-all mt-8">
              View All Services
           </button>
        </div>

        {/* Works Gallery */}
        <div className="md:col-span-4 bento-card p-10">
           <div className="flex items-center justify-between mb-10">
              <div>
                 <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Portfolio</div>
                 <h3 className="text-3xl font-black text-white tracking-tight">Works Gallery</h3>
              </div>
              <button className="px-6 py-2.5 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold text-gray-400 transition-all">View All Works</button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-80"></div>
                   <img
                     src={`https://picsum.photos/seed/bento_work_${i}/800/600`}
                     alt={`Project ${i}`}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                   />
                   <div className="absolute bottom-6 left-8 z-20">
                      <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">0{i} Project</div>
                      <div className="text-xl font-black text-white">Modern Digital Platform</div>
                   </div>
                   <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15 pointer-events-none"></div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }
);

BentoGridE.displayName = 'BentoGridE';
