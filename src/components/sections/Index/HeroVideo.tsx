import Image from "next/image"
import Container from "@/components/ui/Container"

import hero from '@/app/assets/home/i.png'

import { motion } from 'framer-motion'

const HeroVideo = () => {
    return (
        <section className="h-[98vh] md:h-screen pt-24">
            <Container className="h-full">
                <motion.div
                    initial={{ opacity: 0.9, scale: 0.5, y: 320 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 2, y: 0 }}
                    transition={{
                        duration: 1,
                        damping: 30,
                        stiffness: 90,
                        mass: 1
                    }}
                    className="rounded-40 overflow-hidden h-full"
                >
                    <Image src={hero} alt="" className="w-full h-full" />
                </motion.div>
            </Container>
        </section>
    )
}

export default HeroVideo