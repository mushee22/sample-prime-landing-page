import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import { Typography } from '@/components/ui/Typography'

import vector from '@/assets/vectors/pattern.png'
import Link from 'next/link'

const FooterMarquee = () => {
    return (
        <Marquee autoFill speed={140} className='overflow-hidden'>
            <Link href='/contact'>
                <Item />
            </Link>
        </Marquee>
    )
}

export default FooterMarquee

const Item = () => {
    return (
        <div className='flex items-center gap-6 mx-3'>
            <Image src={vector} alt="Let' s Collaborate " className='opacity-30 h-10 w-auto' />
            <Typography variant='heading' size='lg'>CONNECT NOW </Typography>
        </div>
    )
}

