import SocialLink, { SocialLinkProps } from '@/components/elements/Common/SocialLink'
import Container from '@/components/ui/Container'
import CurrentYear from '@/components/ui/CurrentYear'
import { Typography } from '@/components/ui/Typography'

const Copyright = ({ socialLinks }: { socialLinks: SocialLinkProps[] }) => {
    return (
        <Container className='py-6 lg:py-10'>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between gap-4 lg:gap-10 items-center'>
                <Typography variant='body' size='md' className='text-center md:text-start order-2 lg:order-1 max-w-xs md:max-w-full max-md:mx-auto'>© Copyright <CurrentYear/> vellody communications. All rights reserved.</Typography>
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

