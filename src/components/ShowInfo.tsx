import { Link } from "react-router-dom";
import { IShow } from "../types";

export const ShowInfo = ({ show }: { show: IShow }) => {
  const genres = show.genres.map((g) => {
    return (
      <li key={g.id} className="flex">
        <span className="mr-1">
          <svg
            className="w-5 h-5 mt-px text-deep-purple-accent-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </span>
        <Link
          to={`/genres/${g.id}`}
          className="transition-colors duration-300 hover:text-deep-purple-accent-700"
        >
          {g.name}
        </Link>
      </li>
    );
  });

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {show.title}
          </h5>
          <p className="mb-6 text-gray-900">{show.overview}</p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
              Genres
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">{genres}</ul>
            </div>
          </div>
        </div>
        <div className="lg:pl-30 sm:pl-20 sm:ml-10">
          <img
            className=" w-auto h-full rounded shadow-lg sm:h-96"
            src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
            alt={show.name}
          />
        </div>
      </div>
      <div className="flex flex-row basis-1/6 justify-center my-5">
        <div className="mb-10 text-center md:mb-16 lg:mb-20">
          <a
            target="_blank"
            href={show.homepage}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Go to show homepage
          </a>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {show.status}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            {show.tagline}<br/>
            {show.type}
          </h2>
          {show.belongs_to_collection && (
            <>
              <p className="text-base text-gray-700 md:text-lg">
                {show.belongs_to_collection.name}
              </p>
              <img
                className=" w-auto h-full rounded shadow-lg sm:h-96 ml-auto mr-auto"
                src={`https://image.tmdb.org/t/p/w300${show.belongs_to_collection.poster_path}`}
                alt={show.name}
              />
            </>
          )}
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Seasons</h6>
            <p className="text-sm text-gray-900">{show.number_of_seasons}</p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              First Episode Air Date
            </h6>
            <p className="text-sm text-gray-900">{show.first_air_date}</p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Last Episode Air Date
            </h6>
            <p className="text-sm text-gray-900">{show.last_air_date}</p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Episodes</h6>
            <p className="text-sm text-gray-900">{show.number_of_episodes}</p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Production Companies
            </h6>
            {show.production_companies.length > 0 &&
              show.production_companies.map((p) => {
                return (
                  <p key={p.id} className="text-sm text-gray-900">
                    <span className="text-black font-bold text-indigo-950">
                      Company:{" "}
                    </span>
                    {p.name}
                  </p>
                );
              })}
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Vote Average</h6>
            <p className="text-sm text-gray-900">{show.vote_average}</p>
          </div>
        </div>
        <div className="text-center">
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${show.imdb_id}`}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Go to show page on IMDB
          </a>
        </div>
      </div>
    </div>
  );
};
