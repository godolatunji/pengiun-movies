import MoviePoster from "./MoviePoster";
import { IMovie } from "../types";
import { Link } from "react-router-dom";

function MoviesList({
  title,
  movies,
}: {
  title: string;
  movies: Array<IMovie>;
}) {
  const style = {
    display: "contents",
  };

  return (
    <div className="my-8 mx-1">
      <h2 className="text-2xl font-bold uppercase mx-8 mt-10">{title}</h2>
      <div className="flex overflow-x-auto mt-0 p-4 no-scrollbar">
        {movies &&
          movies.map((movie: IMovie) => {
            return (
              <Link
                key={movie.id}
                to={
                  movie.release_date
                    ? `/movies/${movie.id}`
                    : `/shows/${movie.id}`
                }
                className=""
                style={style}
                onClick={() =>
                  movie.release_date
                    ? (window.location.href = `/movies/${movie.id}`)
                    : (window.location.href = `/shows/${movie.id}`)
                }
              >
                <MoviePoster
                  key={movie.id}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : `https://placehold.co/300x450?text=${
                          movie.name ||
                          movie.original_title?.split(" ").join("+")
                        }`
                  }
                  alt={movie.name}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MoviesList;
