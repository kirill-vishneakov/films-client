import { useTheme } from "../../../app/hooks/useTheme"
import { Logo } from "./Logo/Logo"
import { Sidebar } from "./Sidebar/Sidebar"

import styles from "./Header.module.css"
import type { Menu } from "../../types/interfaces"

interface Props {
  menu: Menu[]
}

export function Header({ menu }: Props) {
  const { theme, changeTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <Sidebar menu={menu} />
        <button className={styles.btn} onClick={changeTheme}>
          {theme === "dark" ? "🌞" : "🌚"}
        </button>
      </div>
    </header>
  )
}
