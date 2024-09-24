export interface IMovie {
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
  release_date?: string;
  title?: string;
  name?: string;
  video?: string;
  vote_count?: number;
  vote_average?: number;
  revenue?: number;
  first_air_date?: string;
  homepage?: string;
  genres?: string[];
  status?: boolean;
  tagline?: string;
  production_companies?: Array<Record<string, number | string>>;
  belongs_to_collection?: Record<string, number | string>;
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
