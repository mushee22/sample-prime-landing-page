import HeroVideo from "@/components/sections/Index/HeroVideo"
import Intro from "@/components/sections/Index/Intro"
import Service from "@/components/sections/Index/Service"
import WhyUs from "@/components/sections/Index/WhyUs"
import WhyUsSticky from "@/components/sections/Index/WhyUsSticky"
import WhyUsAfter from "@/components/sections/Index/WhyUsAfter"
import Testimonial from "../sections/Index/Testimonial"

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
            {/* <Testimonial /> */}
        </main>
    )
}
