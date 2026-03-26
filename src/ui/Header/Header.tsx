import { useTheme } from "../../hooks/useTheme"
import { Logo } from "./Logo/Logo"
import { Sidebar } from "./Sidebar/Sidebar"

import styles from "./Header.module.css"

export function Header() {
  const { theme, changeTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <Sidebar />
        <button className={styles.btn} onClick={changeTheme}>
          {theme === "dark" ? "🌞" : "🌚"}
        </button>
      </div>
    </header>
  )
}
