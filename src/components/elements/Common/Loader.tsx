'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4500); // Sufficient time for the full panel sequence
        return () => clearTimeout(timer);
    }, []);

    const panels = Array.from({ length: 12 });

    // Transition settings
    const panelTransition = {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
    };

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 4 }}
                    className="fixed inset-0 z-[9999] bg-transparent pointer-events-none"
                >
                    <div className="fixed inset-0 grid grid-cols-12 w-full h-full z-10">
                        {panels.map((_, i) => (
                            <motion.div
                                key={`loading-panel-${i}`}
                                initial={{ scaleY: 1 }}
                                animate={{ scaleY: 1 }}
                                exit={{
                                    scaleY: 0,
                                    transition: { ...panelTransition, delay: i * 0.05 }
                                }}
                                style={{ transformOrigin: 'top' }}
                                className="bg-[#0c0c0c] border-x-[0.5px] border-white/5 h-[100.5%] w-[100.5%] ml-[-0.25px]"
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8 } }}
                        className="fixed inset-0 z-20 flex items-center justify-center pointer-events-auto"
                    >
                        <div className="flex flex-col items-center max-w-[90vw] md:max-w-2xl px-4 text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                className="w-full h-auto mb-10"
                            >
                                <svg
                                    width="100%"
                                    height="auto"
                                    viewBox="0 0 360 140"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="max-w-[180px] md:max-w-[300px] mx-auto"
                                >
                                    <path d="M20 120V20H40L80 90V20H100V120H80L40 50V120H20Z" fill="white" />

                                    <path d="M140 20H210V40H160V65H200V85H160V100H210V120H140V20Z" fill="white" />

                                    <path d="M250 20H300C320 20 330 30 330 45C330 58 323 66 312 69C325 72 335 81 335 97C335 115 323 120 300 120H250V20ZM270 40V60H295C305 60 310 56 310 50C310 44 305 40 295 40H270ZM270 80V100H300C310 100 315 96 315 90C315 84 310 80 300 80H270Z" fill="white" />
                                </svg>

                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.8, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="overflow-hidden"
                            >
                                <p className="text-white text-[10px] md:text-sm tracking-[0.6em] uppercase font-light">
                                    Architecting Excellence
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100px' }}
                                transition={{ duration: 1.5, ease: 'circOut', delay: 1.2 }}
                                className="h-[1px] bg-primary mt-6 mb-2 mx-auto"
                            />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{ duration: 1, delay: 2 }}
                                className="text-white text-[8px] tracking-[0.3em] uppercase font-light"
                            >
                                National Engineering Bureau
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Reveal Splash Sequence - Staggered Slide Out */}
                    <div className="fixed inset-0 grid grid-cols-12 w-full h-full z-30 pointer-events-none">
                        {panels.map((_, i) => (
                            <motion.div
                                key={`exit-panel-${i}`}
                                initial={{ y: '100%' }}
                                animate={{ y: '100%' }}
                                exit={{
                                    y: '-100.5%',
                                    transition: { ...panelTransition, delay: i * 0.05 }
                                }}
                                className="bg-[#27a3b5] h-[100.5%] w-[100.5%] ml-[-0.25px] flex items-center justify-center overflow-hidden"
                            >
                                {/* Static architectural grid elements for texture */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                            </motion.div>
                        ))}
                    </div>

                    <style jsx>{`
                        .bg-dark {
                            background-color: #0c0c0c;
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
