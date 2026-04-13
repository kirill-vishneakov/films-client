import axios from "axios"
import type { Confirmation, Genre, MovieRes, Pageble } from "@/common/types"

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzA4MDlhMjIzNjBiYzAxNzc3NWZjZTJiZGU2ZDAwNCIsIm5iZiI6MTcyNjMxMjA4OS40MzUwMDAyLCJzdWIiOiI2NmU1NmU5OWYzZDNmOGJmZjk2ZDg0ZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V4TM1IDy4OmNYj1u8FYxXjCmuI2CO2ltmadd8vUg_FQ"

let config: Confirmation | null = null

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  params: {
    language: "ru-RU",
  },
})

export async function getCategoryMovies(
  endpoint: "now_playing" | "upcoming" | "top_rated" | "popular"
): Promise<Pageble<MovieRes>> {
  const res = await api(`movie/${endpoint}`)
  return res.data
}

export async function initConfig() {
  const res = await api("configuration")
  config = res.data
}

export function getConfiguration(): Confirmation | null {
  return config
}

export async function getGenres(): Promise<{ genres: Genre[] }> {
  const res = await api("genre/movie/list")
  return res.data
}

export async function getFilteredMovies(
  sort_by: string,
  left: number,
  right: number,
  genres: Genre[],
  page: number
) {
  let genresStr = genres.map(el => el.id).join("%2C")
  if (genresStr) genresStr = "with_genres=" + genresStr
  const res = await api("discover/movie", {
    params: {
      sort_by,
      "vote_average.gte": left,
      "vote_average.lte": right,
      page,
      with_genres: genres.length ? genres.map(el => el.id).join(",") : undefined,
    },
  })
  return res.data
}

export async function getSearchMovies(query: string) {
  const res = await api("search/movie", {
    params: { query },
  })
  return res.data
}

export async function getMovie(id: string) {
  const res = await api(`movie/${id}`)
  return res.data
}

export async function getMovieCast(id: string) {
  const res = await api(`movie/${id}/credits`)
  return res.data
}

export async function getMovieSimilar(id: string) {
  const res = await api(`movie/${id}/similar`)
  return res.data
}
