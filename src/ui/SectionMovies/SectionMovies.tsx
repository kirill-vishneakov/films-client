import type { MovieRes } from "../../api/api"
import Card from "../Card/Card"
import styles from "./SectionMovies.module.css"

interface Props {
  movies: MovieRes[] | null | undefined
  title: string
}

export default function SectionMovies({ movies, title }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <a className={styles.viewMoreLink} href="/movies/popular">
          <button className={styles.btn}>Показать еще</button>
        </a>
      </div>
      <div className={styles.grid}>
        {movies && movies.slice(0, 6).map(movie => <Card key={movie.id} movie={movie} />)}
      </div>
    </section>
  )
}
