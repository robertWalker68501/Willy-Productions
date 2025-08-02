import Navbar from '@/components/shared/navigation/Navbar';

const Header = () => {
  return (
    <header className='border border-b-slate-200 py-4 shadow'>
      <div className='mx-auto max-w-7xl px-4'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
