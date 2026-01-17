import type { Metadata } from 'next';
import localFont from "next/font/local";
import './globals.css';

import SmoothScrolling from '@/components/ui/SmoothScrolling';
import Header from '@/components/sections/Header/Header';
import Footer from '@/components/sections/Footer/Footer';


import { ToastContainer } from 'react-toastify'
import WhatsApp from '@/components/elements/Common/Whatsapp';

const sfProBold = localFont({
    src: "../fonts/SFPRODISPLAYMEDIUM.woff",
    variable: "--font-sfPro-bold",
    weight: "500",
});

const sfProMedium = localFont({
    src: "../fonts/SFPRODISPLAYMEDIUM.woff",
    variable: "--font-sfPro-medium",
    weight: "500",
});

const sfProRegular = localFont({
    src: "../fonts/SFPRODISPLAYREGULAR.woff",
    variable: "--font-sfPro-regular",
    weight: "400",
});

export const metadata: Metadata = {
    title: 'Prime',
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
                    <ToastContainer
                        position="top-right"
                        className="!top-24 lg:w-1/3"
                        limit={1}
                    />

                    {children}
                    <Footer />
                </SmoothScrolling>
            </body>
        </html>
    );
}
