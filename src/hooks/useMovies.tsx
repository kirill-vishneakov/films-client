import { useEffect, useState } from "react"
import { getCategoryMovies, type MovieRes, type Pageble } from "../api/api"

interface Movies {
  popular: Pageble<MovieRes> | null
  topRated: Pageble<MovieRes> | null
  upcoming: Pageble<MovieRes> | null
  nowPlaying: Pageble<MovieRes> | null
}

interface Output {
  movie: MovieRes | null
  movies: Movies
}

export function useMovies(): Output {
  const [movie, setMovie] = useState<MovieRes | null>(null)
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

  useEffect(setRandomMovie, [movies.popular])

  function setRandomMovie() {
    if (!movies.popular) return undefined
    setMovie(movies.popular.results[Math.floor(Math.random() * movies.popular.results.length)])
  }

  return { movie, movies }
}
