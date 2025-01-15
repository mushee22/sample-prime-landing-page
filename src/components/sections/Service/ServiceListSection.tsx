import ServiceListItem, { ServiceListItemProps } from "@/components/elements/Service/ServiceListItem"

import { cn } from "@/lib/utils"

const ServiceListSection = ({ service, className }: { service: ServiceListItemProps, className?: string }) => {
  return (
    <div className={cn("py-16 md:py-24", className)}>
      <ServiceListItem {...service} />
    </div>
  )
}



export default ServiceListSection