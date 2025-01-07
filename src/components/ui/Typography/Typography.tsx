import React from 'react';
import { OverridableComponent } from '@/types';

import { cn } from '@/lib/utils';

import { TypographyProps, TypographyTypeMap } from './TypographyProps';
import { typographyVariants, variantMapping } from './typographyVariants';

export const Typography = React.forwardRef(
    (
        { className, variant, size, font, as, ...props }: TypographyProps,
        ref
    ) => {
        const Component =
            as || (variant ? variantMapping[variant] : undefined) || 'span';

        return (
            <Component
                className={cn(
                    typographyVariants({ variant, size, font, className })
                )}
                ref={ref}
                {...props}
            />
        );
    }
) as OverridableComponent<TypographyTypeMap>;

Typography.displayName = 'Typography';
