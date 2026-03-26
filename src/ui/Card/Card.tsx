import styles from "./Card.module.css"
import { clsx } from "clsx"
import type { MovieRes } from "../../api/api"
import { getImageUrl } from "../../utils/getImageUrl"

interface Props {
  movie: MovieRes
}

export default function Card({ movie }: Props) {
  const favorite = false

  return (
    <article className={styles.card}>
      <div className={styles.posterFrame}>
        <a className={styles.posterLink} href="/movie/id">
          <img
            className={styles.poster}
            src={getImageUrl(movie.poster_path, "card", movie.title)}
            alt=""
          />
          <span
            className={clsx({
              [styles.badge]: true,
              [styles.ratingBadge]: true,
              [styles.positive]: movie.vote_average >= 7.0,
              [styles.neutral]: movie.vote_average >= 5.0 && movie.vote_average < 7.0,
              [styles.negative]: movie.vote_average < 5.0,
            })}>
            {movie.vote_average.toFixed(1)}
          </span>
        </a>
        <button
          className={clsx({
            [styles.btn]: true,
            [styles.favoriteButtonVisible]: favorite,
          })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className={clsx({
              [styles.favoriteIcon]: true,
              [styles.favoriteIconActive]: favorite,
            })}>
            <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        </button>
      </div>
      <a className={styles.cardTitleLink} href="/movie/id">
        <h3 className={styles.cartTitle}>{movie.title}</h3>
      </a>
    </article>
  )
}
