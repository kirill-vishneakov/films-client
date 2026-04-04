import type { ChangeEvent } from "react"
import type { SortBy, SortList } from "../../../../hooks/useFilters/useFilters"
import styles from "./SortLabel.module.css"

interface Props {
  sortList: SortList[]
  sortBy: SortBy
  changeSort: (e: ChangeEvent<HTMLSelectElement>) => void
  changeSortType: () => void
}

export function SortLabel({ sortList, sortBy, changeSort, changeSortType }: Props) {
  return (
    <label className={styles.sortLabel}>
      Сортировать по
      <div className={styles.sortSelectWrapper}>
        <select className={styles.sortSelect} value={sortBy.value} onChange={changeSort}>
          {sortList.map(sort => (
            <option key={sort.value} value={sort.value}>
              {sort.title}
            </option>
          ))}
        </select>
        <button className={styles.btn} onClick={changeSortType}>
          {sortBy.type === "asc" ? "☝️" : "👇"}
        </button>
      </div>
    </label>
  )
}
