import Hero from "../components/Hero";
import * as api from "../lib/api";
import { IMovie } from "../types";
import Movies from "../components/Movies";
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

  const originals = originalQuery.data.results;
  const popular = popularQuery.data.results;
  const nowPlaying = nowPlayingQuery.data.results;
  const trending = trendingQuery.data.results;
  const upcoming = upcomingQuery.data.results;
  const toprated = topratedQuery.data.results;

  const movie: IMovie = trending[Math.floor(Math.random() * originals.length)];

  return (
    <div>
      <Hero movie={movie} />;
      <Movies title="Discover" movies={originals} />
      <Movies title="popular" movies={popular} />
      <Movies title="top rated" movies={toprated} />
      <Movies title="trending" movies={trending} />
      <Movies title="Now Playing" movies={nowPlaying} />
      <Movies title="upcoming" movies={upcoming} />
    </div>
  );
}

export default Home;
