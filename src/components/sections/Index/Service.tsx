import ServiceCard from "@/components/elements/Home/ServiceCard"
import Container from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

import i1 from '@/app/assets/vectors/i1.png'
import i2 from '@/app/assets/vectors/i2.png'
import i3 from '@/app/assets/vectors/i3.png'
import i4 from '@/app/assets/vectors/i4.png'
import i5 from '@/app/assets/vectors/i5.png'

const Service = () => {
    return (
        <section className="bg-secondary pt-16 md:pt-26 pb-26 rounded-b-40" id="services">
            <Container>
                <div className="text-center mb-14">
                    <Typography variant='heading' size='md' className='text-dark mb-6'>Our Services</Typography>
                    <Typography variant='title' size='sm' className='text-dark md:max-w-3xl mx-auto'>type of partner for today's clients. We bring our collective expertise, AI-driven intelligence and cut-through creativity to counsel clients and deliver transformative ideas that shape culture, spark change and deliver impact.</Typography>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                    {services.map((service, i) => (
                        <div key={i} className="min-h-56 md:min-h-80 basis-[calc(50%-.5rem)] max-md:last:basis-full lg:basis-[calc(25%-1rem)] 2xl:basis-[calc(20%-1rem)] max-w-[300px] min-w-[132px] md:min-w-[240px] max-md:last:max-w-[370px] max-md:last:min-w-[132px]">
                            <ServiceCard {...service} />
                        </div>
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
        title: "PR & Events"
    },
    {
        icon: i2,
        title: "Social Media"
    },
    {
        icon: i3,
        title: "Digital & SEO"
    },
    {
        icon: i4,
        title: "Design & Branding"
    },
    {
        icon: i5,
        title: "Influencer Marketing",
    },
]