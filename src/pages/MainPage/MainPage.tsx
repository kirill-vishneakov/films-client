import { WelcomeSection } from "./WelcomeSection/WelcomeSection"
import styles from "./MainPage.module.css"
import { useMovies } from "../../hooks/useMovies"
import SectionMovies from "../../ui/SectionMovies/SectionMovies"

export function MainPage() {
  const { movie, movies } = useMovies()
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
      <WelcomeSection movie={movie} />
      <div className={styles.sections}>
        {sections.map(section => (
          <SectionMovies key={section.title} {...section} />
        ))}
      </div>
    </section>
  )
}
