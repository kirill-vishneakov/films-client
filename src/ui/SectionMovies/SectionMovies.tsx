import { Link } from "react-router"
import type { MovieRes } from "../../api/api"
import Card from "../Card/Card"
import styles from "./SectionMovies.module.css"

interface Props {
  movies: MovieRes[] | null | undefined
  title: string
  link: string
}

export default function SectionMovies({ movies, title, link }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Link className={styles.viewMoreLink} to={`movies/${link}`}>
          <button className={styles.btn}>Показать еще</button>
        </Link>
      </div>
      <div className={styles.grid}>
        {movies && movies.slice(0, 6).map(movie => <Card key={movie.id} movie={movie} />)}
      </div>
    </section>
  )
}
