import TestimonialSwiper from "@/components/elements/Sliders/TestimonialSwiper"
import Container from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

const Testimonial = () => {
    return (
        <section className="py-16 md:py-24" id="clients">
            <Container className="border-b border-foreground/10 mb-14">
                <div className="text-center mb-10">
                    <Typography variant='heading' size='md'>Our Client Voice</Typography>
                </div>
            </Container>
            <div className="relative">
                <TestimonialSwiper />
                <div className="testimonial-pagination mt-9 relative !w-[112px] cursor-pointer mx-auto"></div>
                <div className="bg-gradient-to-l from-dark h-full w-1/4 absolute top-0 right-0 z-20 max-md:hidden" />
                <div className="bg-gradient-to-r from-dark h-full w-1/4 absolute top-0 left-0 z-20 max-md:hidden" />
            </div>
        </section>
    )
}

export default Testimonial