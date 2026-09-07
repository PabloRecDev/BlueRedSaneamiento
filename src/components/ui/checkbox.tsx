import * as React from 'react';
import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type="checkbox"
      className={cn(
        'mt-0.5 size-4 shrink-0 rounded-sm border border-base-300 accent-primary',
        className,
      )}
      {...props}
    />
  );
}

export { Checkbox };
