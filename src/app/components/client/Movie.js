import Image from 'next/image';
import Link from 'next/link';

export default function Movie({ id, original_title, poster_path, vote_average, release_date }) {
    return (
        <Link href={`/${id}`}>
            <Image
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt="Movie poster"
                width={320}
                height={480}
            />
            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-start justify-center'>
                    <span>{original_title}</span>
                    <span className='text-s'>{release_date}</span>
                </div>
                <div className='flex flex-col items-center justify-center mx-2 my-4'>
                    <Image
                        src="/icons/star.png"
                        alt="Star icon"
                        width={18}
                        height={18}
                        priority
                    />
                    <span className='text-s'>{vote_average}</span>
                </div>
            </div>
        </Link>
    );
}