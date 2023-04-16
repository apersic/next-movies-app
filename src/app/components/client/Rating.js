import Image from "next/image";

export default function Rating({ voteAverage, voteCount }) {
    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/star.png"
                    alt="Star icon"
                    width={32}
                    height={32}
                    priority
                />
                <div className="flex flex-col">
                    <span>{parseFloat(voteAverage).toFixed(2)}/10</span>
                    <span className="text-xs">{voteCount}</span>
                </div>
            </div>
        </div>
    )
}