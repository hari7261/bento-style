import React from 'react';
import { cn } from '../utils/cn';

/**
 * BentoGridB - Spotlight Hover Effect Grid
 *
 * A dynamic grid with spotlight hover effects that highlight cards on interaction.
 * Cards glow and scale on hover for an engaging user experience.
 *
 * @example
 * ```tsx
 * <BentoGridB>
 *   <div className="p-6">
 *     <h3 className="text-xl font-bold">Interactive Card 1</h3>
 *     <p>Hover to see the spotlight effect</p>
 *   </div>
 *   <div className="p-6">
 *     <h3 className="text-xl font-bold">Interactive Card 2</h3>
 *     <p>Beautiful hover animations</p>
 *   </div>
 * </BentoGridB>
 * ```
 */

export interface BentoGridBProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BentoGridB = React.forwardRef<HTMLDivElement, BentoGridBProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => (
          <div
            className={cn(
              'relative rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden',
              'transition-all duration-300 ease-in-out',
              'hover:shadow-2xl hover:scale-105 hover:border-blue-400',
              'hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50',
              'group cursor-pointer'
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
            <div className="relative z-10">{child}</div>
          </div>
        ))}
      </div>
    );
  }
);

BentoGridB.displayName = 'BentoGridB';
