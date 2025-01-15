import Container from '@/components/ui/Container'
import { Typography } from '@/components/ui/Typography'

const Hero = () => {
    return (
        <section className='pt-24'>
            <Container className="max-w-screen-2xl py-16 md:py-24">
                <div className='max-w-[800px]'>
                    <Typography variant='heading' size='lg'><Typography as='span' variant='heading' size='lg' className='text-primary'>Modern Marketing</Typography> With Extraordinary Results</Typography>
                </div>
            </Container>
        </section>
    )
}

export default Hero