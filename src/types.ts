export interface IMovie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  origin_country: string[];
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  name: string;
  video?: string;
  vote_count?: number;
  vote_average?: number;
  revenue?: number;
  first_air_date?: string;
  homepage?: string;
  status?: boolean;
  tagline?: string;
  production_companies: Irecord[];
  belongs_to_collection: Irecord;
  genres: Irecord[];
  budget?: number;
  runtime?: number;
  imdb_id?: string;
}

export interface IProdComp {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IShow {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  title?: string;
  name?: string;
  video?: string;
  vote_count?: number;
  vote_average?: number;
  first_air_date?: string;
  homepage?: string;
  status?: boolean;
  tagline?: string;
  production_companies: Irecord[];
  belongs_to_collection: Irecord;
  genres: Irecord[];
  next_episode_to_air: Irecord;
  budget?: number;
  runtime?: number;
  imdb_id?: string;
  type?: string;
  last_air_date?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
}

export interface Irecord {
  [key: string]: string | number | boolean | undefined;
}

export interface IGenre {
  id: number;
  name: string;
}
