import { NavLink, useParams } from "react-router"
import styles from "./CategoryPage.module.css"
import { useContext, useMemo, useRef } from "react"
import clsx from "clsx"
import { MoviesContext } from "@/app/model"
import { GridMovies } from "@/common/components"

interface CategoryMenu {
  title: string
  link: string
  key: "popular" | "topRated" | "upcoming" | "nowPlaying"
}

export function CategoryPage() {
  const menu: CategoryMenu[] = [
    {
      title: "Популярное",
      link: "popular",
      key: "popular",
    },
    {
      title: "С наивысшей оценкой",
      link: "top_rated",
      key: "topRated",
    },
    {
      title: "Новинки",
      link: "upcoming",
      key: "upcoming",
    },
    {
      title: "Крутяцкие фильмы сегодня",
      link: "now_playing",
      key: "nowPlaying",
    },
  ]

  const movies = useContext(MoviesContext)
  const { category } = useParams<{ category: string }>()

  const currentCategory = useMemo(() => {
    return menu.find(item => item.link === category)
  }, [category])

  const loaderRef = useRef(null)

  if (!currentCategory) {
    return <div>Категория не найдена</div>
  }

  return (
    <section className={styles.page}>
      <div className={styles.content}>
        <div className={styles.categoryContainer}>
          <div className={styles.categoryBtns}>
            {menu.map(el => (
              <NavLink
                key={el.link}
                to={`/movies/${el.link}`}
                className={({ isActive }) =>
                  clsx({
                    [styles.btn]: true,
                    [styles.active]: isActive,
                    [styles.notActive]: !isActive,
                  })
                }>
                {el.title}
              </NavLink>
            ))}
          </div>
        </div>

        {movies && movies[currentCategory.key] && (
          <>
            <GridMovies movies={movies[currentCategory.key]!.results} />
            <div ref={loaderRef}></div>
          </>
        )}
      </div>
    </section>
  )
}
