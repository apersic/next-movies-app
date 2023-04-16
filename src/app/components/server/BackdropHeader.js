import Image from "next/image";
import LabeledList from "../client/LabeledList";
import Rating from "../client/Rating";

export default function BackdropHeader({ title, tagline, genres, voteAverage, voteCount }) {
    return (
        <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 p-4 bg-backdrop">
            <div className="flex flex-col gap-2 backdrop-grayscale-0">
                <span className="text-4xl">{title}</span>
                <span>{tagline}</span>
                <LabeledList label="Genres" data={genres} />
            </div>
            <div className="flex items-center justify-center gap-4 mx-2">
                <Rating voteAverage={voteAverage} voteCount={voteCount} />
                <button className="flex items-center justify-center p-0">
                    <Image
                        alt="Add to favourites"
                        src="/icons/bookmark-empty.png"
                        width={32}
                        height={32}
                        priority
                    />
                </button>
            </div>
        </div>
    )
}