"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import TestimonialItem, { TestimonialItemProps } from "@/components/elements/Home/TestimonialItem";

import t1 from '@/app/assets/home/testimonial-img.jpeg'
import { cn } from "@/lib/utils";

const breakpoints =
{
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1280: {
        slidesPerView: 3,
        spaceBetween: 50,
    },
}

export default function TestimonialSwiper() {
    return (
        <Swiper
            className=""
            effect={"coverflow"}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 80,
                modifier: 1.2,
                slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            // autoplay={true}
            pagination={{
                el: ".testimonial-pagination",
                clickable: true,
            }}
            spaceBetween={50}
            slidesPerView={'auto'}
            centeredSlides={true}
            speed={800}
        >
            {testimonials?.map((testimonial, index) => (
                <SwiperSlide key={index} className={cn(testimonial.type === 'video' ? 'max-w-[800px] !w-full mx-auto !h-auto' : 'max-w-[348px] mx-auto !h-auto', "max-sm:px-4")}>
                    <TestimonialItem {...testimonial} />
                </SwiperSlide>
            ))
            }
        </Swiper >
    );
}


const testimonials: TestimonialItemProps[] = [
    {
        type: 'text',
        data: "1Working with Stellar PR Agency boosted our brand visibility significantly. Their strategic approach and media expertise delivered impressive results, enhancing our engagement. We highly recommend them for any brand looking to grow.",
        src: t1,
        name: "Emily",
    },
    {
        type: 'video',
        poster: "https://images.unsplash.com/photo-1667302146840-e314e50a47d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlc3RpbW9uaWFsJTIwdGh1bWJuYWlsfGVufDB8fDB8fHww",
        videoId: "61JHONRXhjs?si=1-YB5H5HWmEyHN_y",
        src: t1,
        name: "Emily",
    },
    {
        type: 'text',
        data: "2Working with Stellar PR Agency boosted our brand visibility significantly. Their strategic approach and media expertise delivered impressive results, enhancing our engagement. We highly recommend them for any brand looking to grow.",
        src: t1,
        name: "Emily",
    },
    {
        type: 'text',
        data: "3Working with Stellar PR Agency boosted our brand visibility significantly. Their strategic approach and media expertise delivered impressive results, enhancing our engagement. We highly recommend them for any brand looking to grow.",
        src: t1,
        name: "Emily",
    },
]