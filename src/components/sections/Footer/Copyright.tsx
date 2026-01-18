import Image from 'next/image'
import SocialLink, { SocialLinkProps } from '@/components/elements/Common/SocialLink'
import Container from '@/components/ui/Container'
import CurrentYear from '@/components/ui/CurrentYear'
import { Typography } from '@/components/ui/Typography'
import PentaFontWhite from '@/assets/bg/penta-font-white.svg'

const Copyright = ({ socialLinks }: { socialLinks: SocialLinkProps[] }) => {
    return (
        <Container className='py-6 lg:py-10'>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between gap-4 lg:gap-10 items-center'>
                <Typography variant='body' size='md' className='text-center md:text-start order-2 lg:order-1 max-w-xs md:max-w-full max-md:mx-auto'>© Copyright <CurrentYear /> National Engineering Bureau &nbsp; All rights reserved.</Typography>
                <div className='flex items-center gap-2 order-2 lg:order-1'>
                    <Typography variant='body' size='md' style={{ color: '#F7F9FC' }}> Powered by</Typography>
                    <a href="https://pentaverse.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <Image src={PentaFontWhite} alt="Pentaverse" className="h-3 w-auto" />
                    </a>
                </div>

                <div className='flex gap-2.5 items-center order-1 lg:order-2'>
                    {socialLinks.map((item, index) => (
                        <SocialLink key={index} {...item} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Copyright

