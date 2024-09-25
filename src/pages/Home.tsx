import Hero from "../components/Hero";
import * as api from "../lib/api";
import { IMovie } from "../types";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";

function Home() {
  const originalQuery = api.GetOriginals();
  const popularQuery = api.GetPopular();
  const nowPlayingQuery = api.GetNowPlaying();
  const trendingQuery = api.GetTrending();
  const upcomingQuery = api.GetTrending();
  const topratedQuery = api.GetToprated();

  if (originalQuery.isLoading) return <Loader />;
  if (originalQuery.error)
    return "An error has occurred: " + originalQuery.error.message;

  const originals = originalQuery.isSuccess ? originalQuery.data.results : [];
  const popular = popularQuery.isSuccess ? popularQuery.data.results : [];
  const nowPlaying = nowPlayingQuery.isSuccess
    ? nowPlayingQuery.data.results
    : [];
  const trending = trendingQuery.isSuccess ? trendingQuery.data.results : [];
  const upcoming = upcomingQuery.isSuccess ? upcomingQuery.data.results : [];
  const toprated = topratedQuery.isSuccess ? topratedQuery.data.results : [];

  const movie: IMovie = trending[Math.floor(Math.random() * trending.length)];

  return (
    <div>
      {trendingQuery.isSuccess ? <Hero movie={movie} /> : <Loader />};
      {originalQuery.isSuccess && <MoviesList title="Shows" movies={originals} />}
      {popularQuery.isSuccess && <MoviesList title="popular" movies={popular} />}
      {topratedQuery.isSuccess && (
        <MoviesList title="top rated" movies={toprated} />
      )}
      {trendingQuery.isSuccess && <MoviesList title="trending" movies={trending} />}
      {nowPlaying.isSuccess && (
        <MoviesList title="Now Playing" movies={nowPlaying} />
      )}
      {upcomingQuery.isSuccess && <MoviesList title="upcoming" movies={upcoming} />}
    </div>
  );
}

export default Home;
