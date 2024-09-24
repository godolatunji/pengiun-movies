import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import MovieDetails from "./pages/MovieDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/movies" element={<Movies />} /> */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
