import React from 'react';
import { cn } from '../utils/cn';

export interface BentoGridCProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BentoGridC = React.forwardRef<HTMLDivElement, BentoGridCProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 md:grid-cols-6 gap-6 p-4 md:p-8 bg-[#0a0a0a]", className)}
        {...props}
      >
        {/* Seamless Payments */}
        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between group h-[380px]">
          <div className="space-y-4">
             <div className="bg-[#1a1a1a] p-5 rounded-[1.5rem] border border-white/5 flex items-center gap-5 hover:bg-[#222] transition-colors">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(239,68,68,0.3)]">A</div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white mb-0.5">Adobe Creative</div>
                  <div className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Payment on 1 Feb 2024</div>
                </div>
                <div className="text-lg font-mono font-black text-white">$550.00</div>
             </div>
             <div className="bg-[#1a1a1a] p-5 rounded-[1.5rem] border border-white/5 flex items-center gap-5 hover:bg-[#222] transition-colors">
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(99,102,241,0.3)]">F</div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white mb-0.5">Framer Pro</div>
                  <div className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Payment on 1 Feb 2024</div>
                </div>
                <div className="text-lg font-mono font-black text-white">$60.00</div>
             </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white tracking-tight">Seamless Automatic Payments</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">Streamline your financial processes and reduce manual effort.</p>
          </div>
        </div>

        {/* Custom Billing */}
        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between h-[380px]">
           <div className="flex justify-center">
              <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/5 w-full max-w-[240px] text-center shadow-2xl relative">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-white">Recommended</div>
                 <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Basic Plan</span>
                 <div className="text-4xl font-black text-white my-4">$199<span className="text-sm font-medium text-gray-600">/mo</span></div>
                 <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-xs font-black uppercase tracking-widest transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]">Subscribe Now</button>
              </div>
           </div>
           <div>
            <h3 className="text-2xl font-black text-white tracking-tight">Custom Billing models</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">Support recurring business models and automate finance operations.</p>
          </div>
        </div>

        {/* Close the books */}
        <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between h-[380px]">
          <div className="bg-[#1a1a1a] p-6 rounded-[1.5rem] border border-white/5 shadow-inner">
             <div className="flex justify-between items-center mb-6">
               <span className="text-xs font-black text-white uppercase tracking-widest">January Summary</span>
               <div className="px-2 py-1 bg-white/5 rounded text-[8px] font-bold text-gray-500 border border-white/5 uppercase tracking-widest">Jan 2024</div>
             </div>
             <div className="space-y-4">
               <div className="flex justify-between text-xs font-medium"><span className="text-gray-500">Revenue</span><span className="text-white font-mono">$12,344.00</span></div>
               <div className="flex justify-between text-xs font-medium"><span className="text-gray-500">Refunds</span><span className="text-red-400 font-mono">-$1,159.00</span></div>
               <div className="flex justify-between text-xs font-medium"><span className="text-gray-500">Disputes</span><span className="text-orange-400 font-mono">$4,456.00</span></div>
               <div className="flex justify-between text-sm font-black border-t border-white/5 pt-4 mt-2"><span className="text-white">Net Profits</span><span className="text-white font-mono">$6,729.00</span></div>
             </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white tracking-tight">Close the books quickly</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">Easily update your investors and gather customer insights.</p>
          </div>
        </div>

        {/* Payroll System */}
        <div className="md:col-span-3 bento-card p-10 flex flex-col justify-between h-[400px]">
          <div className="overflow-hidden bg-[#0d0d0d] rounded-2xl border border-white/5 p-4">
             <table className="w-full text-left text-[11px] border-separate border-spacing-y-2">
                <thead><tr className="text-gray-600 font-black uppercase tracking-widest"><th>Employee</th><th>Amount</th><th>Status</th></tr></thead>
                <tbody className="font-medium">
                  <tr className="bg-white/5"><td className="p-3 first:rounded-l-xl last:rounded-r-xl">Lucas Rodriguez</td><td className="p-3">$2,000.00</td><td className="p-3"><span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-[9px] font-black uppercase">Processing</span></td></tr>
                  <tr className="bg-white/5"><td className="p-3 first:rounded-l-xl last:rounded-r-xl">Lily Alexa</td><td className="p-3">$2,500.00</td><td className="p-3"><span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[9px] font-black uppercase">Completed</span></td></tr>
                  <tr className="bg-white/5"><td className="p-3 first:rounded-l-xl last:rounded-r-xl">Alex Brown</td><td className="p-3">$2,000.00</td><td className="p-3"><span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[9px] font-black uppercase">Completed</span></td></tr>
                </tbody>
             </table>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-black text-white tracking-tight">Efficient Payroll System</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">Precision, compliance, and stress-free payroll processing for simplified success.</p>
          </div>
        </div>

        {/* International Payment */}
        <div className="md:col-span-3 bento-card p-10 flex flex-col justify-between h-[400px]">
          <div className="flex flex-wrap gap-4 justify-center py-8">
             {['EU', 'US', 'UK', 'CA', 'JP', 'AU', 'IN', 'DE', 'FR', 'BR'].map((code, i) => (
               <div key={i} className="w-14 h-14 bg-[#1a1a1a] rounded-2xl border border-white/5 flex items-center justify-center text-xs font-black text-gray-500 hover:text-white hover:border-white/20 transition-all cursor-pointer group">
                  <span className="group-hover:scale-125 transition-transform">{code}</span>
               </div>
             ))}
          </div>
          <div>
            <h3 className="text-2xl font-black text-white tracking-tight">International Money Payment</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">Collect money from +30 countries in one account, making international transactions swift and hassle-free.</p>
          </div>
        </div>
      </div>
    );
  }
);

BentoGridC.displayName = 'BentoGridC';
