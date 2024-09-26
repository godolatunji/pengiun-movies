import { useQuery } from "@tanstack/react-query";

const URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

const endpoints = {
  originals: "/discover/tv",
  popular: "/movie/popular",
  now_playing: "/movie/now_playing",
  trending: "/trending/all/week",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
  discoverMovie: "/discover/movie",
};

export function GetOriginals() {
  return useQuery({
    queryKey: ["originals"],
    queryFn: async () => {
      const resp = await fetch(`${URL}${endpoints.originals}`, options);
      return await resp.json();
    },
  });
}

export function GetPopular() {
  return useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const resp = await fetch(`${URL}${endpoints.popular}`, options);
      return await resp.json();
    },
  });
}

export async function GetDiscoverMovie(page: number, genre?: number) {
  const url = genre
    ? `${URL}${endpoints.discoverMovie}?page=${page}&with_genres=${genre}`
    : `${URL}${endpoints.discoverMovie}?page=${page}`;
  const resp = await fetch(url, options);
  return await resp.json();
}

export async function GetDiscoverShow(page: number, genre?: number) {
  const url = genre
    ? `${URL}${endpoints.originals}?page=${page}&with_genres=${genre}`
    : `${URL}${endpoints.originals}?page=${page}`;
  const resp = await fetch(url, options);
  return await resp.json();
}

export function GetNowPlaying() {
  return useQuery({
    queryKey: ["now_playing"],
    queryFn: async () => {
      const resp = await fetch(`${URL}${endpoints.now_playing}`, options);
      return await resp.json();
    },
  });
}

export function GetTrending() {
  return useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const resp = await fetch(`${URL}${endpoints.trending}`, options);
      return await resp.json();
    },
  });
}

export function GetToprated() {
  return useQuery({
    queryKey: ["top_rated"],
    queryFn: async () => {
      const resp = await fetch(`${URL}${endpoints.top_rated}`, options);
      return await resp.json();
    },
  });
}

export function GetUpcoming() {
  return useQuery({
    queryKey: ["upcoming"],
    queryFn: async () => {
      const resp = await fetch(`${URL}${endpoints.upcoming}`, options);
      return await resp.json();
    },
  });
}

export function GetMovieDetails(id: number) {
  return useQuery({
    queryKey: ["movie_details"],
    queryFn: async () => {
      const resp = await fetch(`${URL}/movie/${id}`, options);
      return await resp.json();
    },
  });
}

export function GetSimilarMovies(id: number) {
  return useQuery({
    queryKey: ["similar_movies"],
    queryFn: async () => {
      const resp = await fetch(`${URL}/movie/${id}/similar`, options);
      return await resp.json();
    },
  });
}

export function GetShowDetails(id: number) {
  return useQuery({
    queryKey: ["show_details"],
    queryFn: async () => {
      const resp = await fetch(`${URL}/tv/${id}`, options);
      return await resp.json();
    },
  });
}

export function GetSimilarShows(id: number) {
  return useQuery({
    queryKey: ["similar_shows"],
    queryFn: async () => {
      const resp = await fetch(`${URL}/tv/${id}/similar`, options);
      return await resp.json();
    },
  });
}

export function GetMovieGenres() {
  return useQuery({
    queryKey: ["movie_genres"],
    queryFn: async () => {
      const resp = await fetch(`${URL}/genre/movie/list`, options);
      return await resp.json();
    },
  });
}

export function GetShowGenres() {
  return useQuery({
    queryKey: ["show_genres"],
    queryFn: async () => {
      const resp = await fetch(`${URL}/genre/tv/list`, options);
      return await resp.json();
    },
  });
}
