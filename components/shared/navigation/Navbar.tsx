import SiteLogo from '@/components/shared/SiteLogo';
import MobileNav from '@/components/shared/navigation/MobileNav';
import DesktopNav from '@/components/shared/navigation/DesktopNav';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <SiteLogo
        href='/'
        linkText='Willy Productions'
      />

      {/* Desktop Navigation */}
      <div className='hidden items-center md:flex'>
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
