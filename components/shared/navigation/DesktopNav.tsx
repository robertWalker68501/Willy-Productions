import Link from 'next/link';
import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

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

      <ThemeToggle />

      <SignedOut>
        <Button>
          <Link href='/sign-in'>Login</Link>
        </Button>
        <Button>
          <Link href='/sign-up'>Register</Link>
        </Button>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default DesktopNav;
