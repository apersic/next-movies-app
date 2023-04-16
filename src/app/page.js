import Movie from "./components/client/Movie";

async function getData() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const data = await getData()
  const movies = data.results

  
  return (
    <main>
      <h1 className="text-4xl mx-4 my-8 px-2">Movies</h1>
      <div className="grid gap-16 grid-cols-fluid py-2 px-6">
        {movies.map((movie) => (
          <Movie 
            key={movie.id}
            id={movie.id}
            original_title={movie.original_title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
