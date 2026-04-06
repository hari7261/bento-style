import React from 'react';
import { cn } from '../utils/cn';

/**
 * BentoGridE - Hero-Style 2x2 + Supporting Blocks
 *
 * Asymmetric grid with a large hero area (2x2) and smaller supporting cards.
 * Perfect for landing pages and feature showcases with a primary focus area.
 *
 * @example
 * ```tsx
 * <BentoGridE>
 *   <div className="p-8 flex items-center justify-center">
 *     <h1 className="text-4xl font-bold">Hero Content</h1>
 *   </div>
 *   <div className="p-4">
 *     <h3>Feature 1</h3>
 *   </div>
 *   <div className="p-4">
 *     <h3>Feature 2</h3>
 *   </div>
 *   <div className="p-4">
 *     <h3>Feature 3</h3>
 *   </div>
 *   <div className="p-4">
 *     <h3>Feature 4</h3>
 *   </div>
 * </BentoGridE>
 * ```
 */

export interface BentoGridEProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BentoGridE = React.forwardRef<HTMLDivElement, BentoGridEProps>(
  ({ children, className, ...props }, ref) => {
    const childArray = React.Children.toArray(children);

    return (
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 md:grid-cols-4 gap-4 w-full auto-rows-[200px]',
          className
        )}
        {...props}
      >
        {childArray.map((child, index) => (
          <div
            key={index}
            className={cn(
              'rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden',
              'transition-all duration-200 hover:shadow-lg',
              index === 0
                ? 'md:col-span-2 md:row-span-2'
                : 'md:col-span-1 md:row-span-1'
            )}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
);

BentoGridE.displayName = 'BentoGridE';
