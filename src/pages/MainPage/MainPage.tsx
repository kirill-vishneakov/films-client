import { WelcomeSection } from "./WelcomeSection/WelcomeSection"
import styles from "./MainPage.module.css"
import { useMovies } from "../../hooks/useMovies"
import SectionMovies from "../../ui/SectionMovies/SectionMovies"

export function MainPage() {
  const { movie, movies } = useMovies()
  const sections = [
    {
      title: "Популярное",
      movies: movies.popular?.results,
    },
    {
      title: "С наивысшей оценкой",
      movies: movies.topRated?.results,
    },
    {
      title: "Новинки",
      movies: movies.upcoming?.results,
    },
    {
      title: "Крутяцкие фильмы сегодня",
      movies: movies.nowPlaying?.results,
    },
  ]

  return (
    <section className={styles.page}>
      <WelcomeSection movie={movie} />
      <div className={styles.sections}>
        {sections.map(section => (
          <SectionMovies key={section.title} {...section} />
        ))}
      </div>
    </section>
  )
}
