import { useState, type SubmitEvent } from "react"
import styles from "./SearchForm.module.css"

interface Props {
  onSubmit?: (input: string) => void
}

export function SearchForm({ onSubmit }: Props) {
  const [input, setInput] = useState("")

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    if (onSubmit) onSubmit(input)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
