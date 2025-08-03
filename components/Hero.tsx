import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='mt-20 mb-40 flex bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/dot-pattern-redical.svg)] bg-cover bg-center pb-16 text-sm text-slate-800 md:mt-40 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex w-full flex-col items-center justify-between gap-20 lg:flex-row'>
        <div className='max-md:px-4 lg:w-1/2'>
          <h1 className='max-w-lg bg-gradient-to-r from-black to-slate-600 bg-clip-text text-5xl font-semibold text-transparent md:text-[54px] md:leading-[4.7rem]'>
            Every song begins with spark
          </h1>
          <p className='mt-3 max-w-md text-sm/7 text-slate-500'>
            Our latest thoughts, trends, and tools, to help you write, produce,
            and get your music out faster.
          </p>
          <div className='mt-6 flex h-[54px] max-w-md items-center rounded-md border border-slate-300 text-sm focus-within:border-blue-500'>
            <input
              type='email'
              placeholder='Enter your email'
              className='h-full w-full rounded-md px-4 outline-none'
            />
            <button className='mr-1 flex h-[46px] items-center justify-center rounded-md bg-blue-500 px-8 text-white transition hover:bg-blue-700'>
              Subscribe
            </button>
          </div>
          <p className='mt-2 text-xs text-slate-600'>
            Only the updates you actually want.
          </p>
          <div className='mt-9 flex items-center'>
            <div className='flex -space-x-3.5 pr-3'>
              <Image
                src='/assets/images/hero-image-01.jpeg'
                alt='image'
                width={10}
                height={10}
                className='z-1 size-10 rounded-full border-2 border-white transition hover:-translate-y-px'
              />
              <Image
                src='/assets/images/hero-image-02.jpeg'
                alt='image'
                width={10}
                height={10}
                className='z-[2] size-10 rounded-full border-2 border-white transition hover:-translate-y-px'
              />
              <Image
                src='/assets/images/hero-image-03.avif'
                alt='image'
                width={10}
                height={10}
                className='z-[3] size-10 rounded-full border-2 border-white transition hover:-translate-y-px'
              />
              <Image
                src='/assets/images/hero-image-04.avif'
                alt='image'
                width={10}
                height={10}
                className='z-[4] size-10 rounded-full border-2 border-white transition hover:-translate-y-px'
              />
              <Image
                src='/assets/images/hero-image-05.avif'
                alt='image'
                width={10}
                height={10}
                className='z-[4] size-10 rounded-full border-2 border-white transition hover:-translate-y-px'
              />
            </div>
            <div>
              <div className='flex items-center gap-px'>
                <FaStar className='size-4 fill-[#FF8F20]' />
                <FaStar className='size-4 fill-[#FF8F20]' />
                <FaStar className='size-4 fill-[#FF8F20]' />
                <FaStar className='size-4 fill-[#FF8F20]' />
                <FaStar className='size-4 fill-[#FF8F20]' />
              </div>
              <p className='text-sm text-slate-500'>Used by 1,000+ people</p>
            </div>
          </div>
        </div>
        <div className='relative'>
          {/*<div className='absolute inset-0 z-[-1] rounded-lg bg-gradient-to-r from-[#661FFF] via-[#FF1994] to-[#2D73FF] opacity-50 blur-2xl'></div>*/}
          <img
            className='max-h-[560px] w-full max-w-md rounded-[40px] max-md:px-3 md:mr-10'
            src='/assets/images/hero-image-large-02.jpg'
            alt='hero image'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
