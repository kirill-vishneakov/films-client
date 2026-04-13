import clsx from "clsx"

import styles from "./Rating.module.css"

interface Props {
  rating: number
  type: "card" | "page"
}

export function Rating({ rating, type = "card" }: Props) {
  return (
    <span
      className={clsx({
        [styles.badge]: true,
        [styles.ratingBadge]: type === "card",
        [styles.positive]: rating >= 7.0,
        [styles.neutral]: rating >= 5.0 && rating < 7.0,
        [styles.negative]: rating < 5.0,
      })}>
      {rating.toFixed(1)}
    </span>
  )
}
