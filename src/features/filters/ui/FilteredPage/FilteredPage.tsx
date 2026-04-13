import { useRef } from "react"

import { Filters } from "./Filters/Filters"
import { useFilters } from "../../hooks"
import { useInfinityScroll } from "@/common/hooks"
import { GridMovies, SearchForm } from "@/common/components"
import styles from "./FilteredPage.module.css"
export function FilteredPage() {
  const loaderRef = useRef<HTMLDivElement | null>(null)
  const { movies, filters, isLoading, nextPage, search } = useFilters()
  useInfinityScroll(loaderRef, nextPage)

  return (
    <section className={styles.page}>
      <SearchForm onSubmit={search} />
      <div className={styles.content}>
        <div className={styles.filtersColumn}>
          <Filters {...filters} />
        </div>

        <div className={styles.moviesColumn}>
          <section className={styles.section}>
            {isLoading && <div>Загрузка...</div>}
            <GridMovies movies={movies} />
            <div ref={loaderRef}></div>
          </section>
        </div>
      </div>
    </section>
  )
}
