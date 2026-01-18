import { motion } from "framer-motion"
import Image from "next/image"

import Container from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

import bgImage from '@/assets/bg/jafza-market.jpg'

const WhyUsAfter = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <section className="py-24 md:py-32 bg-[#0c0c0c] relative overflow-hidden">
            <Image
                src={bgImage}
                alt="Jafza Market"
                fill
                className="object-cover opacity-10 filter grayscale pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]" />

            <div className="relative z-10">
                <Container>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-[1000px] mx-auto text-center"
                    >
                        <motion.div variants={itemVariants}>
                            <Typography variant="title" size="lg" className="text-white mb-6">
                                Beyond Dimensions<Typography as='span' variant="title" size="lg" font='lg' className='text-primary'>I</Typography>magined…
                            </Typography>
                        </motion.div>

                        <br />

                        <div className="space-y-3">
                            <motion.div variants={itemVariants}>
                                <Typography variant="title" size="lg" className="text-white/80">
                                    From Concept to Completion
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography variant="title" size="lg" className="text-white/60">
                                    through
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography variant="title" size="lg" className="text-white/80">
                                    Design Excellence
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography variant="title" size="lg" className="text-white/80">
                                    Regulatory Compliance
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography variant="title" size="lg" className="text-white/60">
                                    and
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography variant="title" size="lg" className="text-white/80">
                                    Project Leadership
                                </Typography>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </div>
        </section>
    )
}

export default WhyUsAfter