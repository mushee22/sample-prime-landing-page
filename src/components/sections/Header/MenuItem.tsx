import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemProps = {
  path: string;
  title: string
}

export const MenuItem = ({ path, title }: MenuItemProps) => {
  const pathname = usePathname();

  return <li className={cn(pathname == path ? "bg-menuGradient" : "", 'py-2.5 hover:bg-menuGradient hover:pl-6 sm:hover:pl-24 transition-all ease-linear duration-500')}>
    <Link href={path} className="w-full flex">
      <Typography as='span' variant='heading' size='md' className='text-foreground'> {title} </Typography>
    </Link>
  </li>;
};
