import { type ChangeEvent } from "react"
import styles from "./RatingRange.module.css"
import type { Rating } from "../../../../hooks/useFilters/useFilters"

interface Props {
  rating: Rating
  changeRating: (event: ChangeEvent<HTMLInputElement>, vector: "left" | "right") => void
}

export function RatingRange({ rating, changeRating }: Props) {
  const { left, right } = rating
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Рейтинг</span>
        <span className={styles.values}>
          {left.toFixed(1)} - {right.toFixed(1)}
        </span>
      </div>
      <div className={styles.ranges}>
        <div className={styles.rangeTrack}></div>
        <div
          className={styles.rangeFill}
          style={{ left: `${left * 10}%`, width: `${(right - left) * 10}%` }}></div>
        <input
          min="0"
          max="10"
          step="0.1"
          className={styles.rangeInput}
          aria-label="Minimum rating"
          type="range"
          value={left}
          onChange={e => changeRating(e, "left")}
        />
        <input
          min="0"
          max="10"
          step="0.1"
          className={styles.rangeInput}
          aria-label="Maximum rating"
          type="range"
          value={right}
          onChange={e => changeRating(e, "right")}
        />
      </div>
    </div>
  )
}
