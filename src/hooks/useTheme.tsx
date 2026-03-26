import { useEffect, useState } from "react"

const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
const defaultTheme = isDarkTheme ? "dark" : "light"

export function useTheme() {
  const [theme, setTheme] = useState<string>(localStorage.getItem("app-theme") || defaultTheme)

  function changeTheme() {
    setTheme(val => (val === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("app-theme", theme)
  }, [theme])

  return { theme, changeTheme }
}
