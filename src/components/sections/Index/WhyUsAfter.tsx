import Image from "next/image"

import Container from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

import logo from '@/app/assets/logo/logo-dark.png'

const WhyUsAfter = () => {
    return (
        <section className="py-16 md:py-24 bg-foreground">
            <div>
                <Container>
                    <div className="max-w-[1000px] mx-auto text-center">
                        <Image src={logo} alt="vellody" className="mx-auto h-9 w-auto mb-7" />
                        <Typography variant="title" size="lg" className="text-dark mb-6">
                            Is Your Marketing Partner REIMAGINED...
                        </Typography>
                        <Typography variant="title" size="lg" className="text-dark mb-6">
                            …We Explore the Entire Cycle of Marketing to Maximize Awareness of Your Product
                        </Typography>
                        <Typography variant="title" size="lg" className="text-dark">
                            Create Deep Customer Engagement and Deliver Results
                        </Typography>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default WhyUsAfter