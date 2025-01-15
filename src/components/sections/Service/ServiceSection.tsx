import Container from "@/components/ui/Container"
import ServiceListSection from "@/components/sections/Service/ServiceListSection"

import { cn } from "@/lib/utils"

import s1 from '@/app/assets/service/s1.png'
import s2 from '@/app/assets/service/s2.png'
import s3 from '@/app/assets/service/s3.jpeg'
import s4 from '@/app/assets/service/s4.png'
import s5 from '@/app/assets/service/s5.png'

const ServiceSection = () => {
  return (
    <section className="border-t border-primary-foreground/10">
      {services.map((service, i) => (
        <Container key={i} className={cn("max-w-screen-2xl rounded-3xl lg:rounded-40", i % 2 != 0 && "bg-dark")}>
          <ServiceListSection service={service} />
        </Container>
      ))}
    </section>
  )
}

export default ServiceSection


const services = [
  {
    src: s1,
    title: "PR & Events",
    descriptions:
      [
        "We reimagine communication strategies to create authentic narratives that are purpose-built to strengthen our client's reputation. We do this by offering our clients a chance to work with a portfolio of industry specialists within the PR segment that includes Consumer & Retail, Corporate, Tech & Finance, Advocacy & Public Affairs, Sustainability & Biodiversity. ",
        "Reimagining how we can generate a competitive advantage for our clients so they can lead the narrative and stay ahead of their peers - this is what we continuously strive for. "
      ],
    quote: "If I was down to my last dollar of my marketing budget, I'd spend it on PR!",
    quoter: "Bill Gates",
    features:
      [
        "Media outreach and relationship building",
        "Press release creation and distribution",
        "Crisis management and reputation recovery",
        "Brand storytelling to engage target audiences"
      ]
  },
  {
    src: s2,
    title: "Social Media",
    descriptions:
      [
        "We have the technical know how but more importantly we know how to craft visual stories for products, services, and brands.",
        "We craft social media strategies that help you tell a great story and we use the right platforms to set you apart from your competitors. ",
        "We know how to effectively use current trends to keep your brand relevant and all our campaigns are efficiently tracked to be modified and maximized for reach and engagement. "
      ],
    quote: "Content is King but engagement is Queen, and the lady rules the house!",
    quoter: "Mari Smith",
    features:
      [
        "Content creation for major social platforms",
        "Social media calendar planning and scheduling",
        "Visual design and video content for higher engagement",
        "Community management to foster brand loyalty",
      ]
  },
  {
    src: s3,
    title: "Digital & CRM",
    descriptions:
      [
        "Our team of digital specialists excel in crafting high-impact digital solutions that deliver tangible results.",
        "We empower our clients with AI solutions to tackle challenges by delivering engaging and performance-driven solutions.",
        "Our team of CRM experts possess a track-record in fine-tuning and integrating top-tier CRM platforms to create personalized experiences & seamless integration."
      ],
    quote: "In the world of Internet Customer Service, it’s important to remember your competitor is only one mouse click away.",
    quoter: "Doug Warner",
    features:
      [
        "SEO audits and keyword research",
        "Paid digital advertising campaigns",
        "On-page and off-page SEO strategies",
        "Analytics and performance tracking for continuous optimization"
      ]
  },
  {
    src: s4,
    title: "Design & Branding",
    descriptions:
      [
        "We develop a detailed and strategic roadmap to connect your business with your target audience based on thorough research.",
        "We create your brand DNA through outstanding concepts and design to ensure a strong identity focused on growth.",
        "We create unique customer journeys and touch points by developing brand experiences that stand out and make every brand interaction special."
      ],
    quote: "Your brand is a story unfolding across all customer touchpoints.",
    quoter: "Jonah Sachs",
    features:
      [
        "Influencer outreach and partnership management",
        "Campaign planning and execution with brand-aligned influencers",
        "Encourage customers to create and share brand content.",
        "Monitoring and measuring campaign effectiveness"
      ]
  },
  {
    src: s5,
    title: "Influencer Marketing",
    descriptions:
      [
        "Connect, influence and inspire is our motto when it comes to Influencer Marketing.",
        "We manage every touchpoint of your influencer marketing campaign - from organic content creation to managing influencer partnerships to deploying ad spend and tracking campaigns.",
        "We can deploy the most viral, compelling & data-driven campaigns that are based on more than fancy metrics - results!"
      ],
    quote: "People Do Not Buy Goods And Services. They Buy Relations, Stories, And Magic.",
    quoter: "Seth Godin",
    features:
      [
        "Event concept development and planning",
        "End-to-end event management for live and digital formats",
        "On-site branding and experiential marketing",
        "Audience engagement strategies for lasting impact"
      ]
  },
]
