import { useContext } from "react"

import styles from "./WelcomeSection.module.css"
import { MoviesContext } from "@/app/model"
import { getRandomMovie } from "../utils"
import { SearchForm } from "@/common/components"
import { getImageUrl } from "@/common/utils"

export function WelcomeSection() {
  const movies = useContext(MoviesContext)

  const movie = getRandomMovie(movies.popular?.results)

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
