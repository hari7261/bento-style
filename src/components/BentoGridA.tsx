import React from 'react';
import { Grid } from '../primitives/Grid';
import { Card } from '../primitives/Card';
import { cn } from '../utils/cn';

/**
 * BentoGridA - Minimal Clean Bento Layout
 *
 * A clean, minimal 3-column responsive bento grid with equal-sized cards.
 * Perfect for dashboard layouts, feature showcases, or content grids.
 *
 * @example
 * ```tsx
 * <BentoGridA>
 *   <Card>
 *     <h3>Feature 1</h3>
 *     <p>Description</p>
 *   </Card>
 *   <Card>
 *     <h3>Feature 2</h3>
 *     <p>Description</p>
 *   </Card>
 *   <Card>
 *     <h3>Feature 3</h3>
 *     <p>Description</p>
 *   </Card>
 * </BentoGridA>
 * ```
 */

export interface BentoGridAProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BentoGridA = React.forwardRef<HTMLDivElement, BentoGridAProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Grid
        ref={ref}
        cols={{ sm: 1, md: 2, lg: 3 }}
        gap={4}
        className={cn('w-full', className)}
        {...props}
      >
        {children}
      </Grid>
    );
  }
);

BentoGridA.displayName = 'BentoGridA';
