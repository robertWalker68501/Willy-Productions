import Link from 'next/link';
import Logo from '@/public/assets/images/logo.png';
import Image from 'next/image';
import { SiteLogoProps } from '@/types';

const SiteLogo = ({
  href,
  linkText,
  linkClasses,
  imgAlt,
  imgWidth,
  imgHeight,
  imgClasses,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 text-2xl font-semibold ${linkClasses}`}
    >
      <Image
        src={Logo}
        alt={imgAlt || 'Willy Productions Logo'}
        priority
        width={imgWidth || 40}
        height={imgHeight || 40}
        className={`${imgClasses}`}
      />
      <span>{linkText || 'Willy Productions'}</span>
    </Link>
  );
};

export default SiteLogo;
