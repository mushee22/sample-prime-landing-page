import Image from 'next/image';
import Link from 'next/link';

import logoLight from '@/assets/logo/logo.png';

const Logo = () => {

  return (
    <Link href="/">
      <Image
        src={logoLight}
        alt="Vellody"
        className="h-9 w-[164px] object-contain transition-all duration-300"
        style={{ filter: "drop-shadow(0px 4px 22px #0000001F)" }}
      />
    </Link>
  );
};

export default Logo;
