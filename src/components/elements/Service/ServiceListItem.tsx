import { Card, CardContent } from "@/components/ui/Card"
import { Typography } from "@/components/ui/Typography"

import { cn } from "@/lib/utils";

export interface ServiceListItemProps {
    title: string;
    text: string;
    descriptions: string | string[];
    quote: string;
    quoter: string;
    features: string[];
    theme: string;
}

function ServiceListItem({ title, text, descriptions, quote, quoter, features, theme }: ServiceListItemProps) {
    return (
        <Card className="bg-transparent rounded-none shadow-none border-none">
            <CardContent className={cn("flex flex-col lg:flex-row gap-7 xl:gap-16 p-0", theme === 'light' ? "text-dark" : "text-gray-50")}>
                <div className="lg:max-w-[400px] flex-none">
                    <div className="sticky top-28">
                        {/* <div className="md:w-96 h-96 relative rounded-3xl flex-none">
                            <Image src={src} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px" priority={false} className="rounded-3xl object-cover" />
                        </div> */}
                        <div>
                            <Typography variant='heading' size='md' className='capitalize'> {title} </Typography>
                            <div className="mt-6">
                                <Typography as='span' variant='title' size='md' className='text-primary mt-6'> “{quote}“ </Typography>
                                <Typography as='span' variant='title' size='md' className='text-primary italic'> -{quoter} </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="space-y-6">
                        {text && <Typography variant='title' size='lg' className='capitalize'>{text} </Typography>}

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
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 mt-6 xl:mt-9">
                        {features.map((feature, i) => (
                            <div key={i} className={cn("rounded-lg md:rounded-2xl sm:basis-[calc(50%-16px)] w-fit max-w-[420px] py-3 px-6 h-full border border-primary/50", theme == 'light' ? "bg-card" : "bg-[#F7F9FC1F]")}>
                                <Typography variant='title' size='sm'>{feature}</Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


export default ServiceListItem
