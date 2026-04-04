import { useEffect, useRef } from "react"
import { useFilters } from "../../hooks/useFilters/useFilters"
import { GridMovies } from "../../ui/GridMovies/GridMovies"
import styles from "./FilteredPage.module.css"
import { Filters } from "./Filters/Filters"

export function FilteredPage() {
  const {
    movies,
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
    nextPage,
  } = useFilters()

  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        if (!movies) return
        nextPage()
      },
      { rootMargin: "200px" }
    )

    const el = loaderRef.current
    if (!el) return

    observer.observe(el)

    return () => observer.disconnect()
  }, [movies])

  return (
    <section className={styles.page}>
      <div className={styles.content}>
        <div className={styles.filtersColumn}>
          <Filters
            genres={genres}
            selectGenres={selectGenres}
            selectGenre={selectGenre}
            rating={rating}
            changeRating={changeRating}
            reset={reset}
            sortList={sortList}
            sortBy={sortBy}
            changeSort={changeSort}
            changeSortType={changeSortType}
          />
        </div>
        <div className={styles.moviesColumn}>
          <section className={styles.section}>
            <GridMovies movies={movies} />
            <div ref={loaderRef}></div>
          </section>
        </div>
      </div>
    </section>
  )
}
