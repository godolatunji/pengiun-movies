import { useParams } from "react-router-dom";
import * as api from "../lib/api";
import Hero from "../components/Hero";
import { IMovie } from "../types";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";
import { ShowInfo } from "../components/ShowInfo";

function ShowDetails() {
  const { id } = useParams();

  const query = api.GetShowDetails(id);
  const similarQ = api.GetSimilarShows(id);

  if (query.isLoading) return <Loader />;
  if (query.error) return "An error has occurred: " + query.error.message;

  const show: IMovie = query.isSuccess ? query.data : {};
  const similar = similarQ.isSuccess ? similarQ.data.results : [];

  return (
    <div>
      <Hero movie={show} />
      {query.isSuccess && <ShowInfo show={show} />}
      {similarQ.isSuccess && (
        <MoviesList title="similar shows" movies={similar} />
      )}
    </div>
  );
}

export default ShowDetails;
