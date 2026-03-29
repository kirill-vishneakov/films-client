import type { MovieRes } from "../../api/api"
import Card from "../Card/Card"
import styles from "./GridMovies.module.css"

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
