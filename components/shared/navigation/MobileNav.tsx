'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TiThMenu } from 'react-icons/ti';
import SiteLogo from '@/components/shared/SiteLogo';
import { Separator } from '@/components/ui/separator';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const MobileNav = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const handleLinkClick = () => {
    setOpenSheet(false); // Close the sheet
  };

  return (
    <Sheet
      open={openSheet}
      onOpenChange={setOpenSheet}
    >
      <SheetTrigger asChild>
        <TiThMenu className='size-6 cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='w-full'>
        <SheetHeader>
          <SheetTitle className='flex items-center justify-evenly'>
            <span onClick={handleLinkClick}>
              <SiteLogo
                href='/'
                linkText='Willy Productions'
              />
            </span>
            <ThemeToggle />
          </SheetTitle>
          <SheetDescription className='mt-2 text-center'>
            <span>
              The next generation of hard-rock and heavy-metal music production.
            </span>
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className='flex flex-col items-center justify-center gap-8'>
          {navLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className='text-xl font-medium text-gray-700 dark:text-gray-300'
                onClick={handleLinkClick}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
