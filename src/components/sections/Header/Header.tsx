"use client"

import Container from '@/components/ui/Container';
import Logo from '@/components/sections/Header/Logo';
import HamburgerMenu from '@/components/sections/Header/HamburgerMenu';
import NavigationDropdown from '@/components/sections/Header/NavigationDropdown';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <motion.div
            initial={{ y: -90 }}
            animate={{ y: 0 }}
            transition={{ bounce: .2, delay: .3, duration: 1, }}
            className="fixed top-0 inset-x-0 w-full z-[70]">
            <header className=''>
                <Container className='z-50 relative'>
                    <div className="flex justify-between gap-10 items-center pt-6 pb-4">
                        <Logo />
                        <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
                    </div>
                </Container>
                <div className={cn("fixed w-full inset-x-0 top-0 bg-background z-40 transition-all duration-700 pt-24 h-dvh", isOpen ? 'pointer-events-auto opacity-100' : 'opacity-0 -translate-y-full pointer-events-none')}>
                    <NavigationDropdown setOpen={setOpen} />
                </div>
            </header>
        </motion.div>
    );
}
