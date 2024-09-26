import { Link } from "react-router-dom";
import MoviePoster from "../components/MoviePoster";
import * as api from "../lib/api";
import { IGenre } from "../types";
import Loader from "../components/Loader";

export default function Genres() {
  const style = {
    display: "contents",
  };

  const queryM = api.GetMovieGenres();
  const queryS = api.GetShowGenres();

  if (queryM.isLoading || queryS.isLoading) return <Loader />;
  if (queryM.error) return "An error has occurred: " + queryM.error.message;

  const genresM: IGenre[] = queryM.data.genres;
  const genresS: IGenre[] = queryS.data.genres;

  return (
    <>
      <div className="my-8 mx-1">
        <h2 className="border-l-8 mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Movie Genres
        </h2>
        <div className="flex flex-row flex-wrap">
          {queryM.isSuccess &&
            genresM.map((m: IGenre) => {
              return (
                <Link
                  key={m.id}
                  to={`/movies?genre=${m.id}`}
                  className=""
                  style={style}
                  onClick={() =>
                    (window.location.href = `/movies?genre=${m.id}`)
                  }
                >
                  <MoviePoster
                    src={`https://placehold.co/300x450?text=${m.name
                      .split(" ")
                      .join("+")}`}
                    alt={m.name}
                  />
                </Link>
              );
            })}
        </div>
      </div>
      <div className="my-8 mx-1">
        <h2 className="border-l-8 mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Show Genres
        </h2>
        <div className="flex flex-row flex-wrap">
          {queryS.isSuccess &&
            genresS.map((s: IGenre) => {
              return (
                <Link
                  key={s.id}
                  to={`/shows?genre=${s.id}`}
                  className=""
                  style={style}
                  onClick={() =>
                    (window.location.href = `/shows?genre=${s.id}`)
                  }
                >
                  <MoviePoster
                    src={`https://placehold.co/300x450?text=${s.name
                      .split(" ")
                      .join("+")}`}
                    alt={s.name}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}
