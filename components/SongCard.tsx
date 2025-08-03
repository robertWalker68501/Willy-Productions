'use client';

import { SongCardProps } from '@/types';

const SongCard = ({ title, artist, album, year, file }: SongCardProps) => {
  return (
    <div className='flex flex-col gap-3 rounded-2xl border border-gray-200 p-6'>
      <h2>Title: {title}</h2>
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
      <p>Year: {year}</p>
      <audio controls>
        <source
          src={file}
          type='audio/mpeg'
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SongCard;
