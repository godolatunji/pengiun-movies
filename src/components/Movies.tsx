import MoviePoster from "./MoviePoster";
import { IMovie } from "../types";
import { Link } from "react-router-dom";

function Movies({ title, movies }: { title: string; movies: Array<IMovie> }) {
  const style = {
    display: "contents",
  };

  return (
    <div className="my-8 mx-1">
      <h2 className="text-2xl font-bold uppercase mx-8 mt-10">{title}</h2>
      <div className="flex overflow-x-auto mt-0 p-4 no-scrollbar">
        {movies && movies.map((movie: IMovie) => {
          return (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className=""
              style={style}
              onClick={() => window.location.href(`/movies/${movie.id}`)}
            >
              <MoviePoster
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
