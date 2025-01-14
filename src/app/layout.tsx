import type { Metadata } from 'next';
import localFont from "next/font/local";
import './globals.css';

import SmoothScrolling from '@/components/ui/SmoothScrolling';
import Header from '@/components/sections/Header/Header';
import Footer from '@/components/sections/Footer/Footer';

const sfProBold = localFont({
    src: "./fonts/SFPRODISPLAYMEDIUM.woff",
    variable: "--font-sfPro-bold",
    weight: "500",
});


const sfProMedium = localFont({
    src: "./fonts/SFPRODISPLAYMEDIUM.woff",
    variable: "--font-sfPro-medium",
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
                className={`${sfProRegular.variable} ${sfProMedium.variable}  ${sfProBold.variable} antialiased`}
            >
                <SmoothScrolling>
                    <Header />
                    {children}
                    <Footer />
                </SmoothScrolling>
            </body>
        </html>
    );
}
