import React from 'react';
import { cn } from '../utils/cn';

export interface BentoGridDProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BentoGridD = React.forwardRef<HTMLDivElement, BentoGridDProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-8 bg-[#0a0a0a]", className)}
        {...props}
      >
        {/* Stats */}
        <div className="bento-card p-8 text-center flex flex-col justify-center items-center hover:bg-[#1a1a1a]">
           <div className="text-4xl font-black text-white mb-2 tracking-tighter">56<span className="text-blue-500">+</span></div>
           <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Projects Completed</div>
        </div>
        <div className="bento-card p-8 text-center flex flex-col justify-center items-center hover:bg-[#1a1a1a]">
           <div className="text-4xl font-black text-white mb-2 tracking-tighter">23<span className="text-purple-500">+</span></div>
           <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Happy Clients</div>
        </div>
        <div className="bento-card p-8 text-center flex flex-col justify-center items-center hover:bg-[#1a1a1a]">
           <div className="text-4xl font-black text-white mb-2 tracking-tighter">06<span className="text-indigo-500">+</span></div>
           <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Year Expertise</div>
        </div>

        {/* Testimonials */}
        <div className="md:row-span-2 bento-card p-8 flex flex-col justify-between">
           <div className="flex items-center gap-2 text-[10px] font-black text-gray-600 uppercase tracking-widest">
              Testimonials
           </div>
           <div className="space-y-8 mt-8">
              <div className="space-y-4">
                 <p className="text-sm font-medium italic text-gray-400 leading-relaxed">"Pragadesh's design skills are unparalleled. He transformed my vague ideas into a stunning website."</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10"></div>
                    <div>
                       <div className="text-xs font-bold text-white">Sarah Johnson</div>
                       <div className="text-[9px] font-medium text-gray-600 uppercase">CEO, TechFlow</div>
                    </div>
                 </div>
              </div>
              <div className="h-px bg-white/5"></div>
              <div className="space-y-4">
                 <p className="text-sm font-medium italic text-gray-400 leading-relaxed">"Working with Pragadesh was a breeze. He delivered a sleek and functional website on time."</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10"></div>
                    <div>
                       <div className="text-xs font-bold text-white">David Smith</div>
                       <div className="text-[9px] font-medium text-gray-600 uppercase">Founder, DesignOps</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Profile Card */}
        <div className="md:col-span-3 bento-card p-10 flex flex-col md:flex-row gap-10 items-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
           <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-all duration-700"></div>
              <div className="w-40 h-40 rounded-[2.5rem] bg-white/5 border border-white/10 p-2 overflow-hidden relative z-10 shadow-2xl">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pragadesh" alt="Profile" className="w-full h-full object-cover rounded-[2rem]" />
              </div>
           </div>
           <div className="flex-1 space-y-6">
              <div>
                 <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Available to work</span>
                 </div>
                 <h3 className="text-4xl font-black text-white tracking-tight">Pragadeswaran</h3>
                 <p className="text-gray-500 text-xl font-medium mt-1">Product Designer & <span className="text-indigo-400">Creative Dev</span></p>
              </div>
              <div className="flex flex-wrap gap-2">
                 {['India', 'English', 'Software Engineer', 'IST', 'MIT University'].map((tag) => (
                   <span key={tag} className="bento-tag">{tag}</span>
                 ))}
              </div>
              <div className="flex gap-4 pt-4">
                 <button className="flex-1 py-3 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] border border-[#0088cc]/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all">Telegram Me</button>
                 <button className="flex-1 py-3 bg-[#25d366]/10 hover:bg-[#25d366]/20 text-[#25d366] border border-[#25d366]/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all">WhatsApp Me</button>
              </div>
           </div>
        </div>

        {/* Partners */}
        <div className="md:col-span-2 bento-card p-10">
           <div className="flex items-center gap-2 text-[10px] font-black text-gray-600 uppercase tracking-widest mb-8">
              Satisfied Partners
           </div>
           <div className="grid grid-cols-3 gap-8 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-default">
              {['YouTube', 'Twitter', 'TikTok', 'Spotify', 'Instagram', 'Dribbble'].map((p) => (
                <div key={p} className="text-center">
                   <div className="text-sm font-black text-white tracking-widest uppercase">{p}</div>
                </div>
              ))}
           </div>
        </div>

        {/* Follow Me */}
        <div className="bento-card p-8">
           <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6">Online Presence</div>
           <div className="space-y-3">
              {['@praha37v', '@praha_design', '@praha_dev'].map((handle, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                   <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{handle}</span>
                   <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-[10px] text-gray-700">↗</div>
                </div>
              ))}
           </div>
        </div>

        {/* Work Together */}
        <div className="bento-card p-8 bg-indigo-600/5 border-indigo-500/10">
           <div className="text-center space-y-6">
              <h4 className="text-xl font-black text-white tracking-tight leading-snug">Let's Work<br/>Together</h4>
              <div className="space-y-3">
                 <button className="w-full py-3 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">Email Me</button>
                 <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all">Schedule a Call</button>
              </div>
           </div>
        </div>
      </div>
    );
  }
);

BentoGridD.displayName = 'BentoGridD';
