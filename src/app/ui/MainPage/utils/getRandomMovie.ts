import type { MovieRes } from "@/common/types"

export function getRandomMovie(movies: MovieRes[] | undefined) {
  if (!movies) return null
  if (!movies.length) return null
  const random = movies[Math.floor(Math.random() * movies.length)]
  return random
}
