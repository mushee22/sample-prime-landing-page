import { cn } from "@/lib/utils";

export type SocialLinkProps = {
    href: string;
    label: string;
    icon: React.ReactNode;
    className?: string;
}

function SocialLink({ href, icon, label, className }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('size-14 md:size-16 rounded-xl border border-primary/10 flex items-center justify-center bg-transparent hover:bg-primary ease-linear duration-500 transition-all', className)}
            aria-label={label}
        >
            {icon}
        </a>
    )
}

export default SocialLink;