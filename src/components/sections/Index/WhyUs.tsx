import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react"

import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import Container from "@/components/ui/Container";

const WhyUs = () => {
    const section = useRef(null);

    const { scrollYProgress } = useScroll({ target: section, offset: ["start center", "center center"], })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 10]);
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

    const text = "Transforming Visions into Iconic Structural Realities across the UAE";

    const words = text.split(" ");

    return (
        <section id="why-choose-us">
            <div className="relative h-dvh grid" ref={section}>
                <motion.div style={{ scale: smoothScale }} className="rounded-full bg-foreground size-[424px] absolute justify-self-center bottom-0" />
                <Container className="h-screen sticky top-0 grid">
                    <div className="grid grid-rows-[1fr_auto_1fr] h-96 gap-8 max-w-[800px] mx-auto text-center relative z-[2]">
                        <Separator orientation="vertical" className="w-[1px] h-[inherit] bg-primary/25 justify-self-center" />
                        <motion.div>
                            {words.map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ scale: 1.8, filter: "blur(8px)", x: 60, opacity: 0 }}
                                    whileInView={{ scale: 1, filter: "blur(0px)", x: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        duration: 0.7,
                                        delay: index * 0.05,
                                    }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="inline-block mx-1"
                                >
                                    <Typography as='span' variant="heading" size="md" className="text-dark" >  {word}</Typography>
                                </motion.span>
                            ))}

                            {/* <Typography variant="heading" size="md" className="text-dark">
                                Need to Launch a New Product but Don't Know Where to Begin?
                            </Typography> */}
                        </motion.div>
                        <Separator orientation="vertical" className="w-[1px] h-[inherit] bg-primary/25 justify-self-center" />
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default WhyUs