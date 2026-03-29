import clsx from "clsx"
import styles from "./Sidebar.module.css"
import { Fragment } from "react/jsx-runtime"
import { NavLink } from "react-router"

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
          <NavLink
            className={({ isActive }) =>
              clsx({
                [styles.link]: true,
                [styles.active]: isActive,
              })
            }
            to={el.link}>
            {el.title}
          </NavLink>
          {i === sidebar.length - 1 || <span className={styles.separator}>|</span>}
        </Fragment>
      ))}
    </nav>
  )
}
