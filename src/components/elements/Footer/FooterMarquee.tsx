import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import { Typography } from '@/components/ui/Typography'

import vector from '@/app/assets/vectors/pattern.png'

const FooterMarquee = () => {
    return (
        <Marquee autoFill speed={140} className='overflow-hidden'>
            <Item />
        </Marquee>
    )
}

export default FooterMarquee

const Item = () => {
    return (
        <div className='flex items-center gap-6 mx-3'>
            <Image src={vector} alt='connect with us' className='opacity-30 h-10 w-auto' />
            <Typography variant='heading' size='lg'>LETS CONNECT</Typography>
        </div>
    )
}

