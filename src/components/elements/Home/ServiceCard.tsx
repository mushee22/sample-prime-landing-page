import { Card, CardContent } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import Image, { StaticImageData } from 'next/image'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils';

interface ServiceCardProps {
    icon: StaticImageData;
    title: string; className?: string
}

function ServiceCard({ icon, title, className }: ServiceCardProps) {
    return (
        <Card className={cn('relative group rounded-3xl overflow-hidden border-none shadow-none cursor-pointer h-full', className)}>
            <motion.div className="absolute inset-0 m-auto w-20 h-20 bg-primary scale-1 group-hover:scale-[8] opacity-0 group-hover:opacity-100 rounded-full ease-in-out duration-700"/>
            <CardContent className='p-6 md:py-12 relative h-full grid content-between'>
                <Image src={icon} alt={title} className='mx-auto size-14 group-hover:rotate-[120deg] ease-linear duration-300' />
                <Typography variant='title' size='md' className='text-dark text-center'> {title} </Typography>
            </CardContent>
        </Card>
    )
}

export default ServiceCard   