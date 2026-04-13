import { createContext } from "react"
import type { Movies } from "./interfaces"

export const MoviesContext = createContext<Movies>({
  nowPlaying: null,
  popular: null,
  topRated: null,
  upcoming: null,
})
