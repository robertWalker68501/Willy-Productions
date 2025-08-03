'use client';

import SiteLogo from '@/components/shared/SiteLogo';
import MobileNav from '@/components/shared/navigation/MobileNav';
import DesktopNav from '@/components/shared/navigation/DesktopNav';
import { useUser } from '@clerk/nextjs';

const Navbar = () => {
  const { user } = useUser();

  console.log('UserInfo', user);

  return (
    <nav className='flex items-center justify-between'>
      <SiteLogo
        href='/'
        linkText='Willy Productions'
      />

      {/* Desktop Navigation */}
      <div className='hidden items-center gap-6 md:flex'>
        <DesktopNav />
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
