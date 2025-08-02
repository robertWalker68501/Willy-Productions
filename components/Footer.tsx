import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-30 w-full px-6 pt-8 text-gray-500 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex w-full flex-col justify-between gap-10 border-b border-gray-500/30 pb-6 md:flex-row'>
        <div className='md:max-w-96'>
          <Image
            className='h-9'
            src='/assets/images/logo.png'
            alt='dummyLogoDark'
            width={40}
            height={40}
          />
          <p className='mt-6 text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className='flex flex-1 items-start gap-20 md:justify-end'>
          <div>
            <h2 className='mb-5 font-semibold text-gray-800'>Company</h2>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About us</Link>
              </li>
              <li>
                <Link href='/contact'>Contact us</Link>
              </li>
              <li>
                <Link href='/privacy-policy'>Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-5 font-semibold text-gray-800'>
              Subscribe to our newsletter
            </h2>
            <div className='space-y-2 text-sm'>
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className='flex items-center gap-2 pt-4'>
                <input
                  className='h-9 w-full max-w-64 rounded border border-gray-500/30 px-2 placeholder-gray-500 ring-blue-500 outline-none focus:ring-2'
                  type='email'
                  placeholder='Enter your email'
                />
                <button className='h-9 w-24 rounded bg-blue-500 text-white'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='pt-4 pb-5 text-center text-xs md:text-sm'>
        Copyright 2025 © <Link href='/'>Willy Productions</Link>. All Right
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
