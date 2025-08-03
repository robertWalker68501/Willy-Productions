const CallToAction = () => {
  return (
    <div className='mt-40 mb-20 flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold text-gray-800 md:text-4xl'>
        Boost your productivity today
      </h2>
      <p className='mt-4 max-w-xl text-center text-slate-500'>
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>
      <div className='mt-6 flex items-center gap-4'>
        <button
          type='button'
          className='rounded-lg bg-blue-500 px-8 py-3 font-medium text-white shadow-md transition-all hover:bg-blue-700 active:scale-95'
        >
          Get Started
        </button>
        <button
          type='button'
          className='group flex items-center gap-2 rounded-lg border border-gray-400 px-8 py-3 font-medium transition hover:bg-gray-100 active:scale-95'
        >
          Learn More
          <svg
            className='mt-1 transition-all group-hover:translate-x-1'
            width='15'
            height='11'
            viewBox='0 0 15 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
