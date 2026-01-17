import Image from "next/image"

import Container from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

import logo from '@/assets/logo/prime-logo-dark.png'

const WhyUsAfter = () => {
    return (
        <section className="py-16 md:py-24 bg-foreground">
            <div>
                <Container>
                    <div className="max-w-[1000px] mx-auto text-center">
                        <div className="">
                            <Image src={logo} alt="vellody" className="mx-auto h-9 w-auto mb-7" />
                        </div>
                        <Typography variant="title" size="lg" className="text-dark mb-6">
                            Lorem ipsum dolor sit amet<Typography as='span' variant="title" size="lg" font='lg' className='text-primary'>I</Typography>magined…
                        </Typography>
                        <br />
                        <div>
                            <Typography variant="title" size="lg" className="text-dark">
                                Lorem ipsum dolor sit amet consectetur adipiscing
                            </Typography>
                            <Typography variant="title" size="lg" className="text-dark">
                                to
                            </Typography>
                            <Typography variant="title" size="lg" className="text-dark">
                                Lorem ipsum
                            </Typography>
                            <Typography variant="title" size="lg" className="text-dark">
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography variant="title" size="lg" className="text-dark">
                                ipsum
                            </Typography>
                            <Typography variant="title" size="lg" className="text-dark">
                                Lorem ipsum
                            </Typography>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default WhyUsAfter