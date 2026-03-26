import clsx from "clsx"
import styles from "./Sidebar.module.css"
import { Fragment } from "react/jsx-runtime"

export function Sidebar() {
  const sidebar = [
    {
      title: "Главная",
      link: "/",
    },
    {
      title: "Категории фильмов",
      link: "/movies/popular",
    },
    {
      title: "Фильтры фильмов",
      link: "/filtered-movies",
    },
    {
      title: "Поиск фильмов",
      link: "/search",
    },
    {
      title: "Избранные",
      link: "/favorites",
    },
  ]
  return (
    <nav className={styles.nav}>
      {sidebar.map((el, i) => (
        <Fragment key={el.link}>
          <a
            className={clsx({
              [styles.link]: true,
              [styles.active]: el.link === "/",
            })}
            href={el.link}>
            {el.title}
          </a>
          {i === sidebar.length - 1 || <span className={styles.separator}>|</span>}
        </Fragment>
      ))}
    </nav>
  )
}
