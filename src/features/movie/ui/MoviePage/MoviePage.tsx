import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getMovie, getMovieCast, getMovieSimilar } from "@/app/api"
import { getImageUrl } from "@/common/utils"
import type { ActorRes, MovieRes, SelectMovieRes } from "@/common/types"
import { Rating, SectionActors, SectionMovies } from "@/common/components"

import styles from "./MoviePage.module.css"
export function MoviePage() {
  const { movieId } = useParams()

  const [movie, setMovie] = useState<SelectMovieRes | null>(null)
  const [moviesSimilar, setMoviesSimilar] = useState<MovieRes[] | null>(null)
  const [cast, setCast] = useState<ActorRes[] | null>(null)

  useEffect(() => {
    if (!movieId) return
    getMovie(movieId).then(data => setMovie(data))
    getMovieCast(movieId).then(data => setCast(data.cast))
    getMovieSimilar(movieId).then(data => setMoviesSimilar(data.results))
  }, [movieId])

  if (!movie) return <div>Загрузка</div>

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <img
            className={styles.img}
            src={getImageUrl(movie.poster_path, "page")}
            alt={movie.title}
          />
        </div>
        <div className={styles.details}>
          <header className={styles.header}>
            <div>
              <h1>{movie.title}</h1>
            </div>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                Дата релиза: {new Date(movie.release_date).toLocaleDateString()}
              </span>
              <Rating rating={movie.vote_average} type="page" />
              <span className={styles.metaItem}>
                Длительность: {`${Math.floor(movie.runtime / 60)}ч. ${movie.runtime % 60}мин.`}
              </span>
            </div>
          </header>
          <p className={styles.text}>{movie.overview}</p>
          <div>
            <h2 className={styles.title}>Жанры</h2>
            <ul className={styles.listGenres}>
              {movie.genres.map(genre => (
                <li className={styles.itemGenre} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SectionActors actors={cast} title="Актеры" />
      <SectionMovies movies={moviesSimilar} title="Похожие фильмы" />
    </section>
  )
}
