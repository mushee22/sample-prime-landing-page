import ServiceCard from "@/components/elements/Home/ServiceCard"
import Container from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

import i1 from '@/app/assets/vectors/i1.png'
import i2 from '@/app/assets/vectors/i2.png'
import i3 from '@/app/assets/vectors/i3.png'
import i4 from '@/app/assets/vectors/i4.png'
import i5 from '@/app/assets/vectors/i5.png'
import i6 from '@/app/assets/vectors/i6.png'

const Service = () => {
    return (
        <section className="bg-secondary pt-16 md:pt-26 pb-26 md:rounded-b-40" id="services">
            <Container className="max-w-screen-2xl">
                <div className="text-center mb-14">
                    <Typography variant='heading' size='md' className='text-dark mb-6'>Our Services</Typography>
                    <Typography variant='title' size='sm' className='text-dark md:max-w-3xl mx-auto'>Type of partner for today&apos;s clients. We bring our collective expertise, AI-driven intelligence and cut-through creativity to counsel clients and deliver transformative ideas that shape culture, spark change and deliver impact.</Typography>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                    {services.map((service, i) => (
                        <div key={i} className="min-h-56 md:min-h-80 basis-[calc(50%-.5rem)] xl:basis-[calc(25%-1rem)] max-w-[340px] min-w-[132px] md:min-w-[300px] md:max-w-[340px]">
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
        title: "PR"
    },
    {
        icon: i2,
        title: "Social Media"
    },
    {
        icon: i3,
        title: "Digital & CRM"
    },
    {
        icon: i4,
        title: "Brand Design"
    },
    {
        icon: i5,
        title: "Influencer Marketing",
    },
    {
        icon: i6,
        title: "Events & Activations "
    }
]