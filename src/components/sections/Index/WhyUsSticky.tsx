import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


function WhyUsSticky() {
    const block1Ref = useRef(null);
    const block2Ref = useRef(null);
    const block3Ref = useRef(null);

    const { scrollYProgress: progress1 } = useScroll({ target: block1Ref, offset: ["start end", "end center"] });
    const { scrollYProgress: progress2 } = useScroll({ target: block2Ref, offset: ["start center", "end center"] });
    const { scrollYProgress: progress3 } = useScroll({ target: block3Ref, offset: ["start center", "end start"] });

    const scale1 = useTransform(progress1, [0, 1], [1, 0]);
    const opacity1 = useTransform(progress1, [0, 1], [1, 0]);

    const scale2 = useTransform(progress2, [0, 1], [1.8, 0]);
    const opacity2 = useTransform(progress2, [0, 0.5, 1], [0, 1, 0]);

    const scale3 = useTransform(progress3, [0, 1], [1.8, 1]);
    const opacity3 = useTransform(progress3, [0, 1], [0, 1]);

    const text = "Stuck with an Aging Brand that is Lost in the Jungle of AI and Modern Tech?";

    const words = text.split(" ");

    return (
        <section className="bg-foreground h-[300vh]">
            <div className="h-screen sticky top-0 flex flex-col items-center justify-between overflow-hidden px-4 md:px-12 xl:px-16">
                <Separator orientation="vertical" className="w-[1px] h-[32vh] bg-primary/25 justify-self-center" />
                <motion.div
                    style={{ scale: scale1, opacity: opacity1 }}
                    className="absolute inset-0 flex justify-center items-center"
                >
                    {/* <Typography variant="title" size="lg" className="text-dark max-w-[800px] mx-auto text-center w-[92%]">
                        Stuck with an Aging Brand that is Lost in the Jungle of AI and Modern Tech?
                    </Typography> */}
                    <div className="text-dark max-w-[800px] mx-auto text-center w-[92%]">
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ scale: 1.8, filter: "blur(8px)", x: 60, opacity: 0 }}
                                whileInView={{ scale: 1, filter: "blur(0px)", x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    bounce: 0,
                                    duration: 0.7,
                                    delay: index * 0.05,
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="inline-block mx-1"
                            >
                                <Typography variant="title" size="lg"  >  {word}</Typography>
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    style={{ scale: scale2, opacity: opacity2 }}
                    className="absolute inset-0 flex justify-center items-center"
                >
                    <Typography variant="title" size="lg" className="text-dark max-w-[800px] mx-auto text-center w-[92%]">
                        Need to Build Brand Credibility or Targeted Audience Engagement?
                    </Typography>
                </motion.div>
                <motion.div
                    style={{ scale: scale3, opacity: opacity3 }}
                    className="absolute inset-0 flex justify-center items-center"
                >
                    <Typography variant="title" size="lg" className="text-dark max-w-[800px] mx-auto text-center w-[92%]">
                        All Your Brand Needs is the Right Marketing Partner!
                    </Typography>
                </motion.div>
                <Separator orientation="vertical" className="w-[1px] h-[32vh] bg-primary/25 justify-self-center" />
            </div>
            <div className="h-screen">
                <div ref={block1Ref} className="h-1/3" />
                <div ref={block2Ref} className="h-1/3" />
                <div ref={block3Ref} className="h-1/3" />
            </div>
        </section>
    );
}

export default WhyUsSticky;
