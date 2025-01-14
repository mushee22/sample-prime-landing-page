import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react"

import { Separator } from "@/components/ui/Separator";
import TextPreview from "@/components/sections/Index/TextPreview";

const WhyUs = () => {
    const section = useRef(null);

    const { scrollYProgress } = useScroll({ target: section, offset: ["start center", "center center"], })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 10]);
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

    return (
        <section id="why-choose-us">
            <div className="relative h-dvh grid" ref={section}>
                <motion.div style={{ scale: smoothScale }} className="rounded-full bg-foreground size-[424px] absolute justify-self-center bottom-0" />
                <div className="h-screen sticky top-0 grid">
                    <div className="grid grid-rows-[1fr_auto_1fr] h-96 gap-8 max-w-[800px] mx-auto text-center relative z-[2]">
                        <Separator orientation="vertical" className="w-[1px] h-[inherit] bg-primary/25 justify-self-center" />
                        <motion.div>
                            {/* <Typography variant="heading" size="md" className="text-dark">
                                Need to Launch a New Product but Don't Know Where to Begin?
                            </Typography> */}
                            <TextPreview />
                        </motion.div>
                        <Separator orientation="vertical" className="w-[1px] h-[inherit] bg-primary/25 justify-self-center" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs