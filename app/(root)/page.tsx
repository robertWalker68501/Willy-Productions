import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Pricing from '@/components/Pricing';

const Home = () => {
  return (
    <div className='mx-auto max-w-7xl px-4'>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Pricing />
    </div>
  );
};

export default Home;
