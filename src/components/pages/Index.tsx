import HeroVideo from "@/components/sections/Index/HeroVideo"
import Intro from "@/components/sections/Index/Intro"
import Testimonial from "@/components/sections/Index/Testimonial"
import Service from "@/components/sections/Index/Service"
import WhyUs from "@/components/sections/Index/WhyUs"
import WhyUsSticky from "@/components/sections/Index/WhyUsSticky"
import WhyUsAfter from "@/components/sections/Index/WhyUsAfter"

export const Index = () => {
    return (
        <main>
            <HeroVideo />
            <div className="overflow-hidden">
                <Intro />
                <WhyUs />
            </div>
            <WhyUsSticky />
            <WhyUsAfter />
            <Service />
            <Testimonial />
        </main>
    )
}
