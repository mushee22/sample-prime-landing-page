import Image from "next/image"
import Container from "@/components/ui/Container"


import { motion } from 'framer-motion'

const HeroVideo = () => {
    return (
        <section className="h-screen">
            <Container className="h-full !p-4">
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
                    className="rounded-3xl md:rounded-40 overflow-hidden h-full"
                >
                    {/* <Image src={hero} alt="" className="w-full h-full" /> */}
                    <video src="/hero-video.mp4"
                        autoPlay
                        muted
                        loop
                        controlsList="nodownload"
                        playsInline
                        webkit-playsinline="true"
                        width="100%"
                        height="100%" className="object-cover h-full w-full aspect-video"></video>
                </motion.div>
            </Container>
        </section>
    )
}

export default HeroVideo