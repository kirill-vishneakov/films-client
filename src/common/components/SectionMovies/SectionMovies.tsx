import { Link } from "react-router"
import styles from "./SectionMovies.module.css"
import type { MovieRes } from "../../types/interfaces"
import { Card } from "@/common/components"

interface Props {
  movies: MovieRes[] | null | undefined
  title: string
  link?: string
}

export function SectionMovies({ movies, title, link }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {link && (
          <Link className={styles.viewMoreLink} to={`movies/${link}`}>
            <button className={styles.btn}>Показать еще</button>
          </Link>
        )}
      </div>
      <div className={styles.grid}>
        {movies && movies.slice(0, 6).map(movie => <Card key={movie.id} movie={movie} />)}
      </div>
    </section>
  )
}
