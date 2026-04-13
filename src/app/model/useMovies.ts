import { useEffect, useState } from "react"
import { getCategoryMovies } from "../api/api"
import type { Movies } from "./interfaces"

export function useMovies() {
  const [movies, setMovies] = useState<Movies>({
    popular: null,
    topRated: null,
    upcoming: null,
    nowPlaying: null,
  })

  useEffect(() => {
    Promise.all([
      getCategoryMovies("popular"),
      getCategoryMovies("top_rated"),
      getCategoryMovies("upcoming"),
      getCategoryMovies("now_playing"),
    ]).then(([popular, topRated, upcoming, nowPlaying]) =>
      setMovies({ popular, topRated, upcoming, nowPlaying })
    )
  }, [])

  return movies
}
