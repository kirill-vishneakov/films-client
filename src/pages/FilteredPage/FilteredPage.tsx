import { useEffect } from "react"
import { useFilters } from "../../hooks/useFilters"
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

  function scrollHendler(e: Event & { target: Document }) {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    )
      nextPage()
  }

  useEffect(() => {
    document.addEventListener("scroll", scrollHendler)
    return () => document.removeEventListener("scroll", scrollHendler)
  }, [])

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
          </section>
        </div>
      </div>
    </section>
  )
}
