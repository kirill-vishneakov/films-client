import type { MovieRes } from "@/common/types"
import styles from "./GridMovies.module.css"
import { Card } from "../Card/Card"

interface Props {
  movies: MovieRes[] | null
}

export function GridMovies({ movies }: Props) {
  return (
    <div className={styles.grid}>
      {movies?.map(movie => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
