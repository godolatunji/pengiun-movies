export default function Footer() {
  return (
    <div className="my-8 mx-auto p-2 text-center ">
      <h4 className="text-sm m-2 hover:font-bold">
        Netflix like UI built with Tailwind and Kitwind
      </h4>
      <h4 className="text-sm m-2 hover:font-bold">
        API Powered by The Movie Database (TMDB)
      </h4>
      <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
        <img
          className="mx-auto w-96"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        />
      </a>
    </div>
  );
}
