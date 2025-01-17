import { cva } from 'class-variance-authority';

export const typographyVariants = cva('', {
    variants: {
        variant: {
            heading: '',
            title: '',
            body: 'text-foreground',
        },
        size: {
            lg: '',
            md: '',
            sm: '',
        },
        font: {
            lg: 'font-bold',
            md: 'font-medium',
            sm: 'font-normal',
        },
    },
    compoundVariants: [
        {
            variant: 'heading',
            size: 'lg',
            className: 'max-sm:text-5xl sm:text-68 xl:text-84 2xl:text-88',
        },
        {
            variant: 'heading',
            size: 'md',
            className: 'max-sm:text-32 sm:text-42 lg:text-52 xl:text-58 2xl:text-7xl 2xl:leading-[84px]',
        },
        {
            variant: 'heading',
            size: 'sm',
            className: 'max-sm:text-32 sm:text-42 lg:text-48 2xl:text-52',
        },
        {
            variant: 'title',
            size: 'lg',
            className: 'max-sm:text-2xl sm:text-4xl lg:text-42 2xl:text-5xl 2xl:leading-[1.2]',
        },

        {
            variant: 'title',
            size: 'md',
            className: 'max-sm:text-lg sm:text-2xl lg:text-26 xl:text-28',
        },
        {
            variant: 'title',
            size: 'sm',
            className: 'max-sm:text-base sm:text-lg lg:text-22 xl:text-2xl',
        },

        {
            variant: 'body',
            size: 'lg',
            className: 'max-sm:text-base xl:text-lg 2xl:text-xl',
        },
        {
            variant: 'body',
            size: 'md',
            className: 'text-base',
        },
    ],

    defaultVariants: {
        variant: 'body',
        size: 'md',
    },
});

export const variantMapping = {
    heading: 'h1',
    title: 'h4',
    body: 'p',
};
