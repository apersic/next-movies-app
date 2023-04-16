// TO DO add use client to all client components and fix the bug
import Image from "next/image";
import BackdropHeader from "../server/BackdropHeader";

export default function MovieBackdrop({ imageUrl, title, tagline, genres, voteCount, voteAverage, handleOnSubmit }) {
    return (
        <div className="relative flex w-full min-h-[60%]">
            <Image
                src={`https://image.tmdb.org/t/p/original${imageUrl}`}
                alt="Movie backdrop"
                width={1000}
                height={1000}
                className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
                priority
            />
            <BackdropHeader
                title={title}
                tagline={tagline}
                genres={genres}
                voteAverage={voteAverage}
                voteCount={voteCount}
            />
        </div>
    );
}