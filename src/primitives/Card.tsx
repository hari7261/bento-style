import React from 'react';
import { cn } from '../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  media?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ header, media, footer, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden',
          className
        )}
        {...props}
      >
        {header && (
          <div className="border-b border-gray-200 px-4 py-3">{header}</div>
        )}
        {media && <div className="overflow-hidden">{media}</div>}
        {children && <div className="px-4 py-3">{children}</div>}
        {footer && (
          <div className="border-t border-gray-200 px-4 py-3">{footer}</div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';
