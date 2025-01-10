import ContactForm from "@/components/elements/Contact/ContactForm"
import ContactInfoCard from "@/components/elements/Contact/ContactInfoCard"
import Container from "@/components/ui/Container"

const ContactSection = () => {
    return (
        <section className="pt-24 pb-16">
            <Container className="max-w-screen-2xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:basis-3/5 order-2 md:order-1">
                        <ContactInfoCard />
                    </div>
                    <div className="lg:basis-2/5 order-1 md:order-2">
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContactSection