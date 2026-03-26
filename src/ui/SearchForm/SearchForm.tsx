import { useState } from "react"
import styles from "./SearchForm.module.css"

export default function SearchForm() {
  const [input, setInput] = useState("")
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="search"
        placeholder="Поиск фильмов"
        value={input}
        onChange={e => {
          setInput(e.target.value)
        }}
      />
      <button className={styles.btn} disabled={!input}>
        Поиск
      </button>
    </form>
  )
}
