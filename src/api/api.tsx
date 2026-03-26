// const API_KEY = "230809a22360bc017775fce2bde6d004"
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzA4MDlhMjIzNjBiYzAxNzc3NWZjZTJiZGU2ZDAwNCIsIm5iZiI6MTcyNjMxMjA4OS40MzUwMDAyLCJzdWIiOiI2NmU1NmU5OWYzZDNmOGJmZjk2ZDg0ZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V4TM1IDy4OmNYj1u8FYxXjCmuI2CO2ltmadd8vUg_FQ"
const BASE_URL = "https://api.themoviedb.org/3/"
const lang = "?language=ru-RU"

let config: Confirmation | null = null

export interface Confirmation {
  images: {
    base_url: string
    secure_base_url: string
    backdrop_sizes: string[]
    logo_sizes: string[]
    poster_sizes: string[]
    profile_sizes: string[]
    still_sizes: string[]
  }
  change_keys: string[]
}

export interface Pageble<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface MovieRes {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export async function getCategoryMovies(
  endpoint: "now_playing" | "upcoming" | "top_rated" | "popular"
): Promise<Pageble<MovieRes>> {
  const res = await fetch(`${BASE_URL}movie/${endpoint}${lang}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })
  return res.json()
}

export async function initConfig() {
  const res = await fetch(`${BASE_URL}configuration${lang}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })
  await res.json().then(data => (config = data))
}

export function getConfiguration(): Confirmation | null {
  return config
}
