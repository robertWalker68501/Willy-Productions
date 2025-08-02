import Link from 'next/link';
import { navLinks } from '@/constants';

const DesktopNav = () => {
  return (
    <div className='flex items-center gap-6'>
      {navLinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.href}
            className='font-semibold transition-colors duration-300 hover:text-blue-500'
          >
            {link.text}
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopNav;
