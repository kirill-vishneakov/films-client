import type { MovieRes } from "../../../api/api"
import SearchForm from "../../../ui/SearchForm/SearchForm"
import { getImageUrl } from "../../../utils/getImageUrl"

import styles from "./WelcomeSection.module.css"

interface Props {
  movie: MovieRes | null
}

export function WelcomeSection({ movie }: Props) {
  return (
    <section
      className={styles.wrap}
      style={{
        backgroundImage: `linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%), url(${getImageUrl(movie?.backdrop_path, "poster", movie?.title)})`,
      }}>
      <div className={styles.content}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <h2 className={styles.subtitle}>Каталог фильмов из TMDB</h2>
        <SearchForm />
      </div>
    </section>
  )
}
