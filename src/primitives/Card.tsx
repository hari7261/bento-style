import React from 'react';
import { cn } from '../utils/cn';

export type CardVariant = 'default' | 'bordered' | 'elevated' | 'ghost' | 'glass' | 'bento';
export type CardAccent = 'none' | 'top' | 'bottom' | 'left' | 'right';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  media?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  variant?: CardVariant;
  hover?: boolean;
  accent?: CardAccent;
}

const CARD_VARIANTS = {
  default: 'border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800',
  bordered: 'border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
  elevated: 'border-0 bg-white shadow-lg shadow-gray-200/50 dark:bg-gray-800 dark:shadow-gray-900/50',
  ghost: 'border-0 bg-gray-50 dark:bg-gray-800/50',
  glass: 'border border-white/20 bg-white/40 backdrop-blur-md dark:border-white/10 dark:bg-gray-800/40',
  bento: 'border border-[#262626] bg-[#141414] text-white shadow-2xl',
};

const CARD_ACCENTS = {
  none: '',
  top: 'border-t-2 border-t-blue-500',
  bottom: 'border-b-2 border-b-blue-500',
  left: 'border-l-2 border-l-blue-500',
  right: 'border-r-2 border-r-blue-500',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      header,
      media,
      footer,
      children,
      className,
      variant = 'default',
      hover = false,
      accent = 'none',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg overflow-hidden',
          CARD_VARIANTS[variant],
          CARD_ACCENTS[accent],
          hover && 'transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer',
          className
        )}
        {...props}
      >
        {header && (
          <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3">{header}</div>
        )}
        {media && <div className="overflow-hidden">{media}</div>}
        {children && <div className="px-4 py-3">{children}</div>}
        {footer && (
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3">{footer}</div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';