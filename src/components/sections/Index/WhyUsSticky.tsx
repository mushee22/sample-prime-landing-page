import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import regalia from "@/assets/bg/regalia.jpg";
import jewel from "@/assets/bg/jewel-of-the-creek.jpg";
import marina from "@/assets/bg/marina-106.jpg";

function WhyUsSticky() {
    const block1Ref = useRef(null);
    const block2Ref = useRef(null);
    const block3Ref = useRef(null);

    const { scrollYProgress: progress1 } = useScroll({ target: block1Ref, offset: ["start end", "end center"] });
    const { scrollYProgress: progress2 } = useScroll({ target: block2Ref, offset: ["start center", "end center"] });
    const { scrollYProgress: progress3 } = useScroll({ target: block3Ref, offset: ["start center", "end start"] });

    const scale1 = useTransform(progress1, [0, 1], [1, 0.8]);
    const opacity1 = useTransform(progress1, [0, 1], [1, 0]);

    const scale2 = useTransform(progress2, [0, 0.5, 1], [1.2, 1, 0.8]);
    const opacity2 = useTransform(progress2, [0, 0.5, 1], [0, 1, 0]);

    const scale3 = useTransform(progress3, [0, 1], [1.2, 1]);
    const opacity3 = useTransform(progress3, [0, 0.5], [0, 1]);

    const text = "A legacy of 40 years in Dubai's architectural landscape";
    const words = text.split(" ");

    return (
        <section className="bg-[#0c0c0c] h-[400vh] relative">
            <div className="h-screen sticky top-0 flex flex-col items-center justify-between overflow-hidden px-4 md:px-12 xl:px-16">

                {/* Background Images with transitions */}
                <div className="absolute inset-0 z-0">
                    <motion.div style={{ opacity: opacity1, scale: scale1 }} className="absolute inset-0">
                        <Image src={regalia} alt="Regalia" fill className="object-cover opacity-20 filter grayscale hover:grayscale-0 transition-all duration-1000" />
                    </motion.div>
                    <motion.div style={{ opacity: opacity2, scale: scale2 }} className="absolute inset-0">
                        <Image src={jewel} alt="Jewel of the Creek" fill className="object-cover opacity-20 filter grayscale" />
                    </motion.div>
                    <motion.div style={{ opacity: opacity3, scale: scale3 }} className="absolute inset-0">
                        <Image src={marina} alt="Marina 106" fill className="object-cover opacity-20 filter grayscale" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]" />
                </div>

                <Separator orientation="vertical" className="w-[1px] h-[32vh] bg-primary/25 justify-self-center z-10" />

                <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center">
                    <motion.div
                        style={{ opacity: opacity1 }}
                        className="absolute inset-0 flex justify-center items-center pointer-events-none"
                    >
                        <div className="text-white max-w-[800px] mx-auto text-center w-[92%]">
                            {words.map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                    className="inline-block mx-1"
                                >
                                    <Typography variant="title" size="lg" className="text-white"> {word}</Typography>
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ opacity: opacity2 }}
                        className="absolute inset-0 flex justify-center items-center pointer-events-none"
                    >
                        <Typography variant="title" size="lg" className="text-white max-w-[800px] mx-auto text-center w-[92%]">
                            Comprehensive Supervision and Construction Management Excellence
                        </Typography>
                    </motion.div>

                    <motion.div
                        style={{ opacity: opacity3 }}
                        className="absolute inset-0 flex justify-center items-center pointer-events-none"
                    >
                        <Typography variant="title" size="lg" className="text-white max-w-[800px] mx-auto text-center w-[92%]">
                            Leading with Innovative Engineering and Sustainable Design Solutions
                        </Typography>
                    </motion.div>
                </div>

                <Separator orientation="vertical" className="w-[1px] h-[32vh] bg-primary/25 justify-self-center z-10" />
            </div>
            <div className="h-[200vh]">
                <div ref={block1Ref} className="h-1/3" />
                <div ref={block2Ref} className="h-1/3" />
                <div ref={block3Ref} className="h-1/3" />
            </div>
        </section>
    );
}

export default WhyUsSticky;
