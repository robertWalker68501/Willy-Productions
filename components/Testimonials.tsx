'use client';

import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'Frontend Developer',
      message:
        'Integrating this component into our project was seamless and saved us countless hours of development and testing. Highly recommended!',
      image: '/assets/images/testimonial-01.jpeg',
    },
    {
      name: 'Jane Smith',
      title: 'Full Stack Engineer',
      message:
        'This solution not only simplified our workflow but also improved our UI consistency across the board. Excellent tool for modern teams.',
      image: '/assets/images/testimonial-02.jpeg',
    },
    {
      name: 'Bonnie Green',
      title: 'UX Designer',
      message:
        'I was impressed with how intuitive and flexible the design was. It allowed us to rapidly prototype and launch features with confidence.',
      image: '/assets/images/testimonial-03.avif',
    },
  ];

  return (
    <div className='mt-40 bg-gray-50 pt-16'>
      <h1 className='text-center text-4xl font-bold text-gray-900'>
        Testimonials
      </h1>
      <p className='mt-1 text-center text-gray-500'>
        We have collected some testimonials from our users. They are real people
        who have used our product.
      </p>
      <div className='flex flex-wrap items-center justify-center gap-6 pb-16'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='relative max-w-sm overflow-hidden rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg'
          >
            <div className='flex flex-col items-center justify-center p-8 text-center'>
              <div className='mb-4 text-gray-500'>
                <h3 className='text-lg font-semibold text-gray-900'>
                  Very easy to integrate
                </h3>
                <p className='my-4 line-clamp-3 text-sm'>
                  {testimonial.message}
                </p>
              </div>
              <div className='flex items-center justify-center'>
                <Image
                  className='h-9 w-9 rounded-full'
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  width={9}
                  height={9}
                />
                <div className='ml-3 space-y-0.5 text-left font-medium'>
                  <p>{testimonial.name}</p>
                  <p className='text-sm text-gray-500'>{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
