export default function MoviePoster({
  src,
  alt,
}: {
  src: string;
  alt: string | undefined;
}) {
  return (
    <img
      className="m-2 w-48 movie-poster hover:cursor-pointer"
      src={src}
      alt={alt}
    />
  );
}
