import Link from "next/link";
import LabeledList from "./LabeledList";

export default function MovieInfo({overview, companies, runtime, releaseDate, status, budget, revenue, spokenLanguages}) {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' })

    return (
        <div className="flex flex-col gap-1 p-4">
            <p className="my-4">
                {overview}
            </p>
            <div className="flex justify-start items-center gap-2">
                <span>Production: </span>
                {companies.map((company, index) => (
                    <Link href="/" key={index}>{company.name}</Link>
                ))}
            </div>
            <span>Runtime: {formatter.format(parseInt(runtime))}min</span>
            <span>Release date: {releaseDate}</span>
            <span>Status: {status}</span>
            <span>Budget: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(budget)}</span>
            <span>Grossed: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(revenue)}</span>
            <LabeledList label="Languages" data={spokenLanguages} />
        </div>
    )
}