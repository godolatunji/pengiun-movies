import { IMovie } from "../types";

export default function Hero({ movie }: { movie: IMovie }) {
  const backgroundImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "https://placehold.jp/3d4070/ffffff/150x150.jpg?text=hello";
  const style = { backgroundImage: `url(${backgroundImage})`, height: "80vh" };
  const dStyle = {
    textShadow: "2px 2px 2px black",
    width: "45rem",
    maxWidth: "80vw",
    lineHeight: "1.3",
  };

  return (
    <div className="p-8 bg-cover" style={style}>
      <h1 className="text-gray-100 text-5xl font-bold mb-4 text-shadow-3 mt-[40vh]">
        {movie.name || movie.title}
      </h1>
      <p style={dStyle} className="text-gray-100 font-light text-lg mb-4">
        {movie.overview}
      </p>
    </div>
  );
}
