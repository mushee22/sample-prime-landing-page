import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                sm: '620px',
                md: '810px',
                lg: '1280px',
                xl: '1400px',
                '2xl': '1512px',
            },
            fontSize: {
                '22': ['22px', '34px'],
                '26': ['26px', '36px'],
                '28': ['28px', '38px'],
                '32': ['32px', '44px'],
                '42': ['42px', '54px'],
                '52': ['52px', '64px'],
                '58': ['58px', '70px'],
                '68': ['68px', '86px'],
                '74': ['74px', '88px'],
                '84': ['84px', '100px'],
                '88': ['88px', '108px'],
                '92': ['92px', '112px'],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                dark: 'hsl(var(--dark))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '40': '40px'
            },
            backgroundImage: {
                menuGradient: "linear-gradient(90deg, rgba(243, 149, 29, 0) 0%, #F3951D 100%)",
                borderGradient: "linear-gradient(92.83deg, rgba(243, 149, 29, 0.4) -2.81%, rgba(141, 86, 17, 0.04) 104.68%)"
            },
            padding: {
                26: '124px'
            }
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
