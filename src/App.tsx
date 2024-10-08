import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import Genres from "./pages/Genres";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows/" element={<Shows />} />
          <Route path="/genres/" element={<Genres />} />
          <Route path="/shows/:id" element={<ShowDetails />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
