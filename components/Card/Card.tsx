import Image from 'next/image';

interface Props {
  title: string;
  poster: string;
}

export default function Card({ title, poster }: Props): JSX.Element {
  return (
    <div
      className={`flex flex-shrink-0 flex-col justify-between items-center m-3 p-2 
                  rounded-sm hover:bg-slate-600 hover:cursor-pointer`}
    >
      <Image
        className='rounded-sm'
        src={poster}
        alt={title}
        width='200px'
        height='312px'
      />
      <p className='text-center mt-2'>{title}</p>
    </div>
  );
}
