import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const Logo = ({ src }: { src: StaticImageData }) => {
    return (
        <Link href="/">
            <Image src={src} alt="Vellody" className="h-9 w-auto" />
        </Link>
    );
};

export default Logo;
