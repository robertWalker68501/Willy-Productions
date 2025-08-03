import SongCard from '@/components/SongCard';
import { songs } from '@/constants';

const MusicPage = () => {
  return (
    <div className='mx-auto mt-20 max-w-7xl px-4'>
      <h1 className='text-center text-4xl font-bold text-slate-800 dark:text-white'>
        Music From The Man Himself
      </h1>
      <p className='mt-2 text-center text-gray-400 md:text-lg'>
        These songs are straight from the mind of a music genius. They are a mix
        of genres and styles, showcasing the creativity and passion that goes
        into each track. Whether you&#39;re looking for something upbeat to get
        you moving or something more mellow to relax to, there&#39;s something
        here for everyone.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {songs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            year={song.year}
            file={song.file}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
