import React from 'react';
import { cn } from '../utils/cn';

/**
 * BentoGridD - Masonry-Style Asymmetric Grid
 *
 * Pinterest-style masonry layout with asymmetric card sizes.
 * Items flow naturally based on content height.
 *
 * @example
 * ```tsx
 * <BentoGridD>
 *   <div className="p-6 h-48">
 *     <h3 className="text-xl font-bold">Short Card</h3>
 *   </div>
 *   <div className="p-6 h-64">
 *     <h3 className="text-xl font-bold">Medium Card</h3>
 *     <p>More content here</p>
 *   </div>
 *   <div className="p-6 h-96">
 *     <h3 className="text-xl font-bold">Tall Card</h3>
 *     <p>Even more content for variety</p>
 *   </div>
 * </BentoGridD>
 * ```
 */

export interface BentoGridDProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BentoGridD = React.forwardRef<HTMLDivElement, BentoGridDProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'columns-1 md:columns-2 lg:columns-3 gap-4 w-full space-y-4',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => (
          <div
            className={cn(
              'break-inside-avoid mb-4',
              'rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden',
              'transition-all duration-200 hover:shadow-md'
            )}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
);

BentoGridD.displayName = 'BentoGridD';
