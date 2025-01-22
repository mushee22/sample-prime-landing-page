import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemProps = {
  path: string;
  title: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuItem = ({ path, title, setOpen }: MenuItemProps) => {
  const pathname = usePathname();

  return <li onClick={() => setOpen(false)} className={cn(pathname == path ? "" : "", 'py-2.5 pl-4 sm:pl-16 hover:pl-6 sm:hover:pl-24 transition-all ease-linear duration-400', 'group relative')}>
    <div className="w-full h-full absolute inset-0 bg-menuGradient opacity-0 group-hover:opacity-100 transition-all ease-linear duration-400" />
    <Link href={path} className="w-full flex relative z-[2]">
      <Typography as='span' variant='heading' size='md' className='text-foreground'> {title} </Typography>
    </Link>
  </li>;
};
