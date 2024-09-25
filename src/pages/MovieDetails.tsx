import { useParams } from "react-router-dom";
import * as api from "../lib/api";
import Hero from "../components/Hero";
import { IMovie } from "../types";
import { MovieInfo } from "../components/MovieInfo";
import Movies from "../components/MoviesList";
import Loader from "../components/Loader";

function MovieDetails() {
  const { id } = useParams();

  const query = api.GetMovieDetails(id);
  const similarQ = api.GetSimilarMovies(id);

  if (query.isLoading) return <Loader />;
  if (query.error) return "An error has occurred: " + query.error.message;

  const movie: IMovie = query.isSuccess ? query.data : {};
  const similar = similarQ.isSuccess ? similarQ.data.results : [];

  return (
    <div>
      {query.isSuccess && <Hero movie={movie} />}
      {query.isSuccess && <MovieInfo movie={movie} />}
      {similarQ.isSuccess && <Movies title="similar movies" movies={similar} />}
    </div>
  );
}

export default MovieDetails;
