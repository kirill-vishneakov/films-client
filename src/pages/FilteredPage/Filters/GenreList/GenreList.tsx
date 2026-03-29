import clsx from "clsx"
import type { Genre } from "../../../../api/api"
import styles from "./GenreList.module.css"

interface Props {
  genres: Genre[]
  selectGenres: Genre[]
  selectGenre: (genre: Genre) => void
}

export function GenreList({ genres, selectGenres, selectGenre }: Props) {
  return (
    <div className={styles.genres}>
      {genres.map(genre => (
        <button
          onClick={() => selectGenre(genre)}
          key={genre.id}
          className={clsx({
            [styles.btn]: true,
            [styles.active]: selectGenres.some(selectGenre => selectGenre.id === genre.id),
          })}>
          {genre.name}
        </button>
      ))}
    </div>
  )
}
