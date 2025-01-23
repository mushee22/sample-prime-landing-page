import Link from "next/link"

import Container from "@/components/ui/Container"
import { Separator } from "@/components/ui/Separator"
import { Typography } from "@/components/ui/Typography"
import FooterMarquee from "@/components/elements/Footer/FooterMarquee"

const Contact = () => {
    return (
        <Container className="pb-5 md:pb-12">
            <div className="mx-auto space-y-4 text-center flex flex-col justify-center">
                <Typography variant='title' size='md'>Like to collaborate with us?</Typography>
                <div>
                    <div className="max-w-4xl mx-auto py-6 sm:py-8 xl:py-9 px-9 md:px-14 lg:px-9 xl:px-14 border border-primary/10 bg-foreground/5 rounded-full">
                        <FooterMarquee />
                    </div>
                </div>
                <div className="flex items-center w-fit mx-auto gap-2 md:gap-4 max-sm:px-0 p-4">
                    <Link href='mailto:enquiry@vellodycommunications.com' target="_blank" className="flex gap-2 items-center">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.25 15.9375H5.75C5.4425 15.9375 5.1875 15.6825 5.1875 15.375C5.1875 15.0675 5.4425 14.8125 5.75 14.8125H13.25C15.395 14.8125 16.4375 13.77 16.4375 11.625V6.375C16.4375 4.23 15.395 3.1875 13.25 3.1875H5.75C3.605 3.1875 2.5625 4.23 2.5625 6.375C2.5625 6.6825 2.3075 6.9375 2 6.9375C1.6925 6.9375 1.4375 6.6825 1.4375 6.375C1.4375 3.6375 3.0125 2.0625 5.75 2.0625H13.25C15.9875 2.0625 17.5625 3.6375 17.5625 6.375V11.625C17.5625 14.3625 15.9875 15.9375 13.25 15.9375Z" fill="#F7F9FC" fillOpacity="0.8" />
                            <path d="M9.49983 9.65247C8.86983 9.65247 8.23234 9.45748 7.74484 9.05998L5.39733 7.18498C5.15733 6.98998 5.11234 6.63748 5.30734 6.39748C5.50234 6.15748 5.85483 6.11248 6.09483 6.30748L8.44233 8.18248C9.01233 8.63998 9.97983 8.63998 10.5498 8.18248L12.8973 6.30748C13.1373 6.11248 13.4973 6.14998 13.6848 6.39748C13.8798 6.63748 13.8423 6.99748 13.5948 7.18498L11.2473 9.05998C10.7673 9.45748 10.1298 9.65247 9.49983 9.65247Z" fill="#F7F9FC" fillOpacity="0.8" />
                            <path d="M6.5 12.9375H2C1.6925 12.9375 1.4375 12.6825 1.4375 12.375C1.4375 12.0675 1.6925 11.8125 2 11.8125H6.5C6.8075 11.8125 7.0625 12.0675 7.0625 12.375C7.0625 12.6825 6.8075 12.9375 6.5 12.9375Z" fill="#F7F9FC" fillOpacity="0.8" />
                            <path d="M4.25 9.9375H2C1.6925 9.9375 1.4375 9.6825 1.4375 9.375C1.4375 9.0675 1.6925 8.8125 2 8.8125H4.25C4.5575 8.8125 4.8125 9.0675 4.8125 9.375C4.8125 9.6825 4.5575 9.9375 4.25 9.9375Z" fill="#F7F9FC" fillOpacity="0.8" />
                        </svg>
                        <Typography as='span' variant='body' size='md' className="text-foreground/80">enquiry@vellodycommunications.com</Typography>
                    </Link>
                    {/* <div className="h-4">
                        <Separator orientation="vertical" className="bg-foreground/10" />
                    </div>
                    <Link href='tel:9999 999 999' target="_blank" className="flex gap-2 items-center">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.25 15.9375H5.75C5.4425 15.9375 5.1875 15.6825 5.1875 15.375C5.1875 15.0675 5.4425 14.8125 5.75 14.8125H13.25C15.395 14.8125 16.4375 13.77 16.4375 11.625V6.375C16.4375 4.23 15.395 3.1875 13.25 3.1875H5.75C3.605 3.1875 2.5625 4.23 2.5625 6.375C2.5625 6.6825 2.3075 6.9375 2 6.9375C1.6925 6.9375 1.4375 6.6825 1.4375 6.375C1.4375 3.6375 3.0125 2.0625 5.75 2.0625H13.25C15.9875 2.0625 17.5625 3.6375 17.5625 6.375V11.625C17.5625 14.3625 15.9875 15.9375 13.25 15.9375Z" fill="#F7F9FC" fillOpacity="0.8" />
                            <path d="M9.49983 9.65247C8.86983 9.65247 8.23234 9.45748 7.74484 9.05998L5.39733 7.18498C5.15733 6.98998 5.11234 6.63748 5.30734 6.39748C5.50234 6.15748 5.85483 6.11248 6.09483 6.30748L8.44233 8.18248C9.01233 8.63998 9.97983 8.63998 10.5498 8.18248L12.8973 6.30748C13.1373 6.11248 13.4973 6.14998 13.6848 6.39748C13.8798 6.63748 13.8423 6.99748 13.5948 7.18498L11.2473 9.05998C10.7673 9.45748 10.1298 9.65247 9.49983 9.65247Z" fill="#F7F9FC" fillOpacity="0.8" />
                            <path d="M6.5 12.9375H2C1.6925 12.9375 1.4375 12.6825 1.4375 12.375C1.4375 12.0675 1.6925 11.8125 2 11.8125H6.5C6.8075 11.8125 7.0625 12.0675 7.0625 12.375C7.0625 12.6825 6.8075 12.9375 6.5 12.9375Z" fill="#F7F9FC" fillOpacity="0.8" />
                            <path d="M4.25 9.9375H2C1.6925 9.9375 1.4375 9.6825 1.4375 9.375C1.4375 9.0675 1.6925 8.8125 2 8.8125H4.25C4.5575 8.8125 4.8125 9.0675 4.8125 9.375C4.8125 9.6825 4.5575 9.9375 4.25 9.9375Z" fill="#F7F9FC" fillOpacity="0.8" />
                        </svg>
                        <Typography as='span' variant='body' size='md' className="text-foreground/80">9999 999 999</Typography>
                    </Link> */}
                </div>
            </div>
        </Container>
    )
}

export default Contact