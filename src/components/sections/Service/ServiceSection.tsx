import Container from "@/components/ui/Container"
import ServiceListSection from "@/components/sections/Service/ServiceListSection"

import { cn } from "@/lib/utils"

const ServiceSection = () => {
  return (
    <section className="border-t border-primary-foreground/10">
      {services.map((service, i) => (
        <div key={i} className={cn("", i % 2 != 0 && "bg-gray-50")}>
          <Container className="max-w-screen-2xl mx-auto">
            <ServiceListSection service={service} />
          </Container>
        </div>
      ))}
    </section>
  )
}

export default ServiceSection

const services = [
  {
    theme: 'dark',
    title: "PR",
    text: "We reimagine communication strategies to create authentic narratives that are purpose-built to strengthen our client's reputation. ",
    descriptions:
      [
        "We do this by offering our clients a chance to work with a portfolio of industry specialists within the PR segment that include Consumer & Retail, Corporate, Tech & Finance, Advocacy & Public Affairs, Sustainability & Biodiversity. ",
        "Reimagining how we can generate a competitive advantage for our clients so they can lead the narrative and stay ahead of their peers - this is what we continuously strive for. "
      ],
    quote: "If I was down to my last dollar of my marketing budget, I'd spend it on PR!",
    quoter: "Bill Gates",
    features:
      [
        "Media Outreach",
        "⁠Content Writing",
        "⁠Reputation Management",
        "Crisis Communication",
        "Public Advocacy",
        "Media Training",
      ]
  },
  {
    theme: 'light',
    title: "Social Media",
    text: "We have the technical know how but more importantly we know how to craft visual stories for products, services, and brands.",
    descriptions:
      [
        "We craft social media strategies that help you tell a great story and we use the right platforms to set you apart from your competitors. ",
        "We know how to effectively use current trends to keep your brand relevant and all our campaigns are efficiently tracked to be modified and maximized for reach and engagement. "
      ],
    quote: "Content is King but engagement is Queen, and the lady rules the house!",
    quoter: "Mari Smith",
    features:
      [
        "Social Strategy",
        "⁠Content Calendar",
        "Content Creation",
        "Community Management",
        'Optimizing & Scaling',
        "Reporting / Analytics"
      ]
  },
  {
    theme: 'dark',
    title: "Digital & CRM",
    text: "Our team of digital specialists excel in crafting high-impact digital solutions that deliver tangible results.",
    descriptions:
      [
        "We empower our clients with AI solutions to tackle challenges by delivering engaging and performance-driven solutions.",
        "Our CRM experts possess a track-record in fine-tuning and integrating top-tier CRM platforms to create personalized experiences & seamless integration. "
      ],
    quote: "In the world of Internet Customer Service, it’s important to remember your competitor is only one mouse click away.",
    quoter: "Doug Warner",
    features:
      [
        "SEO & SEM",
        "Mobile Marketing",
        "Email Marketing",
        "Website Development",
        "Tailored CRM Solutions",
        "Seamless Integration"
      ]
  },
  {
    theme: 'light',
    title: "Brand Design",
    text: "We develop a detailed and strategic roadmap to connect your business with your target audience based on thorough research.",
    descriptions:
      [
        "We create your brand DNA through outstanding concepts and design to ensure a strong identity focused on growth. ",
        "We create unique customer journeys and touch points by developing brand experiences that stand out and make every brand interaction special."
      ],
    quote: "Your brand is a story unfolding across all customer touchpoints.",
    quoter: "Jonah Sachs",
    features:
      [
        "Brand Logo",
        "Brand Guidelines",
        "⁠Package Design",
        "⁠Social Templates",
        "⁠Store Branding",
        "⁠BTL Design"
      ]
  },
  {
    theme: 'dark',
    title: "Influencer Marketing",
    text: "Connect, influence and inspire is our motto when it comes to Influencer Marketing. ",
    descriptions:
      [
        "We manage every touchpoint of your influencer marketing campaign - from organic content creation to managing influencer partnerships to deploying ad spend and tracking campaigns. ",
        "We can deploy the most viral, compelling & data-driven campaigns that are based on more than fancy metrics - results!"
      ],
    quote: "People Do Not Buy Goods And Services. They Buy Relations, Stories, And Magic.",
    quoter: "Seth Godin",
    features:
      [
        "Strategy",
        "Platform Selection",
        "⁠Influencer Selection",
        "Campaign Managemen",
        "⁠Brand Partnerships",
        "Analytics & Reporting"
      ]
  },
  {
    theme: 'light',
    title: "Events & Activations ",
    text: "We craft unique and customized experiences for brands to engage with their consumers by strategically conceptualizing, designing and Executing Experiential Marketing Campaigns. ",
    descriptions:
      [
        "From product launches and pop-up events to trade shows and brand activations, we deliver creative solutions that drive consumer interaction and loyalty. ",
        "With a focus on immersive experiences, we bring a brand's story to life - often through innovative concepts and cutting-edge technology across various platforms, including live events, digital activations and social media integration; ensuring a multi-channel impact and a seamless experience."
      ],
    quote: "Your brand is a story unfolding across all customer touchpoints.",
    quoter: "Jonah Sachs",
    features:
      [
        "Media Events",
        "⁠Corporate Events",
        "⁠Pop Up Exhibitions",
        "In-store Activations",
        "⁠Business Conferences",
      ]
  },
]
