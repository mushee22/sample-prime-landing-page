import ServiceCard from "@/components/elements/Home/ServiceCard"
import Container from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

import { motion } from 'framer-motion'

import i1 from '@/assets/vectors/i1.png'
import i2 from '@/assets/vectors/i2.png'
import i3 from '@/assets/vectors/i3.png'
import i4 from '@/assets/vectors/i4.png'
import i5 from '@/assets/vectors/i5.png'
import i6 from '@/assets/vectors/i6.png'

const Service = () => {
    return (
        <section className="bg-secondary pt-16 md:pt-26 pb-26 md:rounded-b-40" id="services">
            <Container className="">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ scale: 0.9, filter: "blur(10px)", y: 10, opacity: 0 }}
                        whileInView={{ scale: 1, filter: "blur(0px)", y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            bounce: 0,
                            duration: 0.7,
                            delay: 0.05
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Typography variant='heading' size='md' className='text-dark mb-6'>
                            Our Services
                        </Typography>
                    </motion.div>
                    <Typography variant='title' size='sm' className='text-dark md:max-w-3xl mx-auto'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
                    </Typography>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                    {services.map((service, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            key={i}
                            className="min-h-56 md:min-h-80 basis-[calc(50%-.5rem)] xl:basis-[calc(25%-1rem)] max-w-[340px] min-w-[132px] md:min-w-[300px] md:max-w-[340px]">
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Service


const services = [
    {
        icon: i1,
        title: "Service 1",
        id: 'pr',
    },
    {
        icon: i2,
        title: "Service 2",
        id: 'media',
    },
    {
        icon: i3,
        title: "Service 3",
        id: 'crm',
    },
    {
        icon: i4,
        title: "Service 4",
        id: 'design',
    },
    {
        icon: i5,
        title: "Service 5",
        id: 'marketing',
    },
]