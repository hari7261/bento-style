import React from 'react';
import { cn } from '../utils/cn';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number | { sm?: number; md?: number; lg?: number };
  gap?: number | string;
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 3, gap = 4, className, children, style, ...props }, ref) => {
    const getGridCols = () => {
      if (typeof cols === 'number') {
        return {
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        };
      }
      return {};
    };

    const getResponsiveClasses = () => {
      if (typeof cols === 'object') {
        const classes = [];
        if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
        if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
        if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
        return classes.join(' ');
      }
      return '';
    };

    const gapValue = typeof gap === 'number' ? `${gap * 0.25}rem` : gap;

    return (
      <div
        ref={ref}
        className={cn('grid', getResponsiveClasses(), className)}
        style={{
          ...getGridCols(),
          gap: gapValue,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
