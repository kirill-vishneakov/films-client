import clsx from "clsx"
import styles from "./Sidebar.module.css"
import { Fragment } from "react/jsx-runtime"
import { NavLink } from "react-router"
import type { Menu } from "../../../types/interfaces"

interface Props {
  menu: Menu[]
}

export function Sidebar({ menu }: Props) {
  return (
    <nav className={styles.nav}>
      {menu.map((el, i) => (
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
          {i === menu.length - 1 || <span className={styles.separator}>|</span>}
        </Fragment>
      ))}
    </nav>
  )
}
