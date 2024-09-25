import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoviePoster from "../components/MoviePoster";
import { IShow } from "../types";
import * as api from "../lib/api";

export default function Shows() {
  const style = {
    display: "contents",
  };

  const [page, setPage] = useState(1);
  const [shows, setShows] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsFetching(true);
      const query = await api.GetDiscoverShow(page);
      setShows([...shows, ...query.results]);
      setIsFetching(false);
    };
    fetch();
  }, [page]);

  function loadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <div className="my-8 mx-1">
        <div className="flex flex-row flex-wrap">
          {shows &&
            shows.map((show: IShow) => {
              return (
                <Link
                  key={show.id}
                  to={`/shows/${show.id}`}
                  className=""
                  style={style}
                  onClick={() => window.location.href(`/shows/${show.id}`)}
                >
                  <MoviePoster
                    src={
                      show.poster_path
                        ? `https://image.tmdb.org/t/p/w300${show.poster_path}`
                        : `https://placehold.co/300x450?text=${show.name
                            ?.split(" ")
                            .join("+")}`
                    }
                    alt={show.name}
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
