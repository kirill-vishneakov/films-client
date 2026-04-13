import { type ReactNode } from "react"
import { useMovies } from "./useMovies"
import { MoviesContext } from "./MoviesContext"

export function MoviesProvider({ children }: { children: ReactNode }) {
  const movies = useMovies()

  return <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>
}
