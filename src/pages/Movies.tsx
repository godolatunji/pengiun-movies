import { Link } from "react-router-dom";
import MoviePoster from "../components/MoviePoster";
import * as api from "../lib/api";
import { IMovie } from "../types";
import { useEffect, useState } from "react";

export default function Movies() {
  const style = {
    display: "contents",
  };

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const fetch = async () => {
      const query = await api.GetDiscoverMovie(page);
      setMovies([...movies, ...query.results]);
    };
    fetch();
    setIsFetching(false);
  }, [page]);

  function loadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <div className="my-8 mx-1">
        <div className="flex flex-row flex-wrap">
          {movies &&
            movies.map((movie: IMovie) => {
              return (
                <Link
                  key={movie.id}
                  to={`/movies/${movie.id}`}
                  className=""
                  style={style}
                  onClick={() => window.location.href(`/movies/${movie.id}`)}
                >
                  <MoviePoster
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : `https://placehold.co/300x450?text=${movie.name
                            .split(" ")
                            .join("+")}`
                    }
                    alt={movie.name}
                  />
                </Link>
              );
            })}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          onClick={() => loadMore()}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          {isFetching ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
}
