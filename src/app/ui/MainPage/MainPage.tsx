import { WelcomeSection } from "./WelcomeSection/WelcomeSection"
import { useContext } from "react"
import { MoviesContext } from "@/app/model"
import { SectionMovies } from "@/common/components"

import styles from "./MainPage.module.css"

export function MainPage() {
  const movies = useContext(MoviesContext)
  const sections = [
    {
      title: "Популярное",
      link: "popular",
      movies: movies.popular?.results,
    },
    {
      title: "С наивысшей оценкой",
      link: "top_rated",
      movies: movies.topRated?.results,
    },
    {
      title: "Новинки",
      link: "upcoming",
      movies: movies.upcoming?.results,
    },
    {
      title: "Крутяцкие фильмы сегодня",
      link: "now_playing",
      movies: movies.nowPlaying?.results,
    },
  ]

  return (
    <section className={styles.page}>
      <WelcomeSection />
      <div className={styles.sections}>
        {sections.map(section => (
          <SectionMovies key={section.title} {...section} />
        ))}
      </div>
    </section>
  )
}
