import type { ChangeEvent } from "react"

import styles from "./Filters.module.css"
import { RatingRange } from "./RatingRange/RatingRange"
import { SortLabel } from "./SortLabel/SortLabel"
import type { Genre } from "@/common/types"
import type { Rating, SortBy, SortList } from "@/features/filters/types"
import { GenreList } from "@/common/components"

interface Props {
  genres: Genre[]
  selectGenres: Genre[]
  selectGenre: (genre: Genre) => void
  rating: Rating
  changeRating: (event: ChangeEvent<HTMLInputElement>, vector: "left" | "right") => void
  reset: () => void
  sortList: SortList[]
  sortBy: SortBy
  changeSort: (e: ChangeEvent<HTMLSelectElement>) => void
  changeSortType: () => void
}

export function Filters({
  genres,
  selectGenres,
  selectGenre,
  rating,
  changeRating,
  reset,
  sortList,
  sortBy,
  changeSort,
  changeSortType,
}: Props) {
  return (
    <aside className={styles.filters}>
      <h2 className={styles.title}>Фильтры</h2>
      <div className={styles.sortControls}>
        <SortLabel
          sortList={sortList}
          sortBy={sortBy}
          changeSort={changeSort}
          changeSortType={changeSortType}
        />
        <RatingRange rating={rating} changeRating={changeRating} />
        <GenreList genres={genres} selectGenres={selectGenres} selectGenre={selectGenre} />
        <div className={styles.actions}>
          <button onClick={reset} className={styles.btn}>
            Сбросить фильтры
          </button>
        </div>
      </div>
    </aside>
  )
}
