import type { Metadata } from 'next';
import localFont from "next/font/local";
import './globals.css';

import SmoothScrolling from '@/components/ui/SmoothScrolling';
import Header from '@/components/sections/Header/Header';

const sfProMedium = localFont({
    src: "./fonts/SFPRODISPLAYMEDIUM.woff",
    variable: "--font-sfPro-light",
    weight: "500",
});

const sfProRegular = localFont({
    src: "./fonts/SFPRODISPLAYREGULAR.woff",
    variable: "--font-sfPro-regular",
    weight: "400",
});

export const metadata: Metadata = {
    title: 'Vellody',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${sfProRegular.variable} ${sfProMedium.variable} antialiased`}
            >
                <SmoothScrolling>
                    <Header />
                    {children}
                </SmoothScrolling>
            </body>
        </html>
    );
}
