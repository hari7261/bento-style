import React from 'react';
import { cn, type ClassValue } from '../utils/cn';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number; '2xl'?: number };
  gap?: number | string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const GRID_COL_CLASS_MAP = {
  sm: {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
    5: 'sm:grid-cols-5',
    6: 'sm:grid-cols-6',
    7: 'sm:grid-cols-7',
    8: 'sm:grid-cols-8',
    9: 'sm:grid-cols-9',
    10: 'sm:grid-cols-10',
    11: 'sm:grid-cols-11',
    12: 'sm:grid-cols-12',
  },
  md: {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
    7: 'md:grid-cols-7',
    8: 'md:grid-cols-8',
    9: 'md:grid-cols-9',
    10: 'md:grid-cols-10',
    11: 'md:grid-cols-11',
    12: 'md:grid-cols-12',
  },
  lg: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
    7: 'lg:grid-cols-7',
    8: 'lg:grid-cols-8',
    9: 'lg:grid-cols-9',
    10: 'lg:grid-cols-10',
    11: 'lg:grid-cols-11',
    12: 'lg:grid-cols-12',
  },
  xl: {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    5: 'xl:grid-cols-5',
    6: 'xl:grid-cols-6',
    7: 'xl:grid-cols-7',
    8: 'xl:grid-cols-8',
    9: 'xl:grid-cols-9',
    10: 'xl:grid-cols-10',
    11: 'xl:grid-cols-11',
    12: 'xl:grid-cols-12',
  },
  '2xl': {
    1: '2xl:grid-cols-1',
    2: '2xl:grid-cols-2',
    3: '2xl:grid-cols-3',
    4: '2xl:grid-cols-4',
    5: '2xl:grid-cols-5',
    6: '2xl:grid-cols-6',
    7: '2xl:grid-cols-7',
    8: '2xl:grid-cols-8',
    9: '2xl:grid-cols-9',
    10: '2xl:grid-cols-10',
    11: '2xl:grid-cols-11',
    12: '2xl:grid-cols-12',
  },
} as const;

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

        if (cols.sm) {
          const smClass =
            GRID_COL_CLASS_MAP.sm[
              cols.sm as keyof typeof GRID_COL_CLASS_MAP.sm
            ];

          if (smClass) {
            classes.push(smClass);
          }
        }

        if (cols.md) {
          const mdClass =
            GRID_COL_CLASS_MAP.md[
              cols.md as keyof typeof GRID_COL_CLASS_MAP.md
            ];

          if (mdClass) {
            classes.push(mdClass);
          }
        }

        if (cols.lg) {
          const lgClass =
            GRID_COL_CLASS_MAP.lg[
              cols.lg as keyof typeof GRID_COL_CLASS_MAP.lg
            ];

          if (lgClass) {
            classes.push(lgClass);
          }
        }

        if (cols.xl) {
          const xlClass =
            GRID_COL_CLASS_MAP.xl[
              cols.xl as keyof typeof GRID_COL_CLASS_MAP.xl
            ];

          if (xlClass) {
            classes.push(xlClass);
          }
        }

        if (cols['2xl']) {
          const xl2Class =
            GRID_COL_CLASS_MAP['2xl'][
              cols['2xl'] as keyof typeof GRID_COL_CLASS_MAP['2xl']
            ];

          if (xl2Class) {
            classes.push(xl2Class);
          }
        }

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
