import SiteLogo from '@/components/shared/SiteLogo';
import MobileNav from '@/components/shared/navigation/MobileNav';
import DesktopNav from '@/components/shared/navigation/DesktopNav';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <SiteLogo
        href='/'
        linkText='Willy Productions'
      />

      {/* Desktop Navigation */}
      <div className='hidden items-center gap-6 md:flex'>
        <DesktopNav />
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
