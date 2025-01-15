import { Card, CardContent } from "@/components/ui/Card"
import { Typography } from "@/components/ui/Typography"
import Image, { StaticImageData } from "next/image"

export interface ServiceListItemProps {
    src: StaticImageData;
    title: string;
    descriptions: string | string[];
    quote: string;
    quoter: string;
    features: string[];
}

function ServiceListItem({ src, title, descriptions, quote, quoter, features }: ServiceListItemProps) {
    return (
        <Card className="bg-transparent rounded-none shadow-none border-none">
            <CardContent className="flex flex-col lg:flex-row gap-7 xl:gap-16 text-gray-50 p-0">
                <div>
                    <div className="sticky top-28">
                        <div className="md:w-96 h-96 relative rounded-3xl flex-none">
                            <Image src={src} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px" priority={false} className="rounded-3xl object-cover" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="space-y-6">
                        <Typography variant='heading' size='md' > {title} </Typography>
                        {typeof descriptions == 'string' ?
                            <Typography variant='title' size='sm' className=''>
                                {descriptions}
                            </Typography>
                            :
                            descriptions.map((desc, index) => (
                                <Typography key={index} variant='title' size='sm' className=''>
                                    {desc}
                                </Typography>
                            ))
                        }
                        <div>
                            <svg width="43" height="27" viewBox="0 0 43 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.5737 9.75652C42.5737 4.36814 38.2056 0 32.8172 0C27.4288 0 23.0607 4.36814 23.0607 9.75652C23.0607 15.1449 29.7129 25.7217 41.2433 26.6087C41.2433 26.6087 33.7042 18.6261 35.9216 18.1826C38.1389 17.7391 42.5737 16.4087 42.5737 9.75652Z" fill="#F3951D" />
                                <path d="M19.5127 9.75634C19.5127 4.36796 15.1446 -0.000183105 9.75617 -0.000183105C4.3678 -0.000183105 -0.000347137 4.36796 -0.000347137 9.75634C-0.000347137 15.1447 6.65183 25.7216 18.1823 26.6085C18.1823 26.6085 10.6431 18.6259 12.8605 18.1824C15.0779 17.7389 19.5127 16.4085 19.5127 9.75634Z" fill="#F3951D" />
                            </svg>
                            <Typography variant='title' size='sm' className='text-primary italic mt-6'> “{quote}“ </Typography>
                            <Typography variant='title' size='sm' className='text-primary italic'> -{quoter} </Typography>
                        </div>
                    </div>
                    <Typography variant='title' size='md' className='my-9'>Key Features</Typography>
                    <div className="flex flex-wrap gap-4">
                        {features.map((feature, i) => (
                            <div key={i} className="bg-borderGradient rounded-2xl sm:basis-[calc(50%-16px)] p-[1px] max-w-[420px]">
                                <div className="py-3 px-6 bg-dark h-full rounded-2xl">
                                    <Typography variant='title' size='sm'>{feature}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


export default ServiceListItem
