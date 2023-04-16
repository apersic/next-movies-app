import MovieBackdrop from "../components/client/MovieBackdrop";
import MovieInfo from "../components/client/MovieInfo";

async function getData(movie) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {
        cache: "no-store",
    });

    return res.json();
}

export default async function MovieDetails({ params }) {
    const { movie } = params
    const data = await getData(movie)

    return (
        <div className="grid gap-16 grid-cols-fluid py-2 px-6 h-[100vh]">
            <MovieBackdrop
                imageUrl={data.poster_path}
                title={data.title}
                tagline={data.tagline}
                genres={data.genres}
                voteCount={data.vote_count}
                voteAverage={data.vote_average}
                handleOnSubmit={() => onSubmit()}
            />
            <MovieInfo
                overview={data.overview}
                companies={data.production_companies}
                runtime={data.runtime}
                releaseDate={data.release_date}
                status={data.status}
                budget={data.budget}
                revenue={data.revenue}
                spokenLanguages={data.spoken_languages}
            />
        </div>
    )
}