import React from 'react';
import { cn } from '../utils/cn';

/**
 * BentoGridC - Glassmorphic Layout
 *
 * Modern glassmorphic design with frosted glass effect, backdrop blur, and subtle borders.
 * Perfect for contemporary, elegant interfaces.
 *
 * @example
 * ```tsx
 * <BentoGridC>
 *   <div className="p-6">
 *     <h3 className="text-xl font-bold text-gray-900">Glass Card 1</h3>
 *     <p className="text-gray-600">Beautiful glassmorphic design</p>
 *   </div>
 *   <div className="p-6">
 *     <h3 className="text-xl font-bold text-gray-900">Glass Card 2</h3>
 *     <p className="text-gray-600">Frosted glass effect</p>
 *   </div>
 * </BentoGridC>
 * ```
 */

export interface BentoGridCProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BentoGridC = React.forwardRef<HTMLDivElement, BentoGridCProps>(
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
              'relative rounded-xl overflow-hidden',
              'bg-white/40 backdrop-blur-md',
              'border border-white/20',
              'shadow-lg shadow-gray-200/50',
              'transition-all duration-300',
              'hover:bg-white/60 hover:shadow-xl hover:shadow-gray-300/50'
            )}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
);

BentoGridC.displayName = 'BentoGridC';
