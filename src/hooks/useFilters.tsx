import { useEffect, useState, type ChangeEvent } from "react"
import { getFilteredMovies, getGenres, type Genre, type MovieRes } from "../api/api"

interface Output {
  movies: MovieRes[] | null
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
  nextPage: () => void
}

export interface Rating {
  left: number
  right: number
}

export interface SortList {
  title: string
  value: string
}

export interface SortBy {
  value: string
  type: "asc" | "desc"
}

const sortList: SortList[] = [
  {
    title: "Популярности",
    value: "popularity",
  },
  {
    title: "Рейтингу",
    value: "vote_average",
  },
  {
    title: "Датe релиза",
    value: "primary_release_date",
  },
  {
    title: "Названию",
    value: "title",
  },
]

export function useFilters(): Output {
  const [movies, setMovies] = useState<MovieRes[] | null>(null)
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectGenres, setSelectGenres] = useState<Genre[]>([])
  const [rating, setRating] = useState({
    left: 0.0,
    right: 10.0,
  })
  const [sortBy, setSortBy] = useState<SortBy>({
    value: sortList[0].value,
    type: "desc",
  })
  const [page, setPage] = useState(1)
  const [fetching, setFetching] = useState<"replace" | "append">("replace")

  useEffect(() => {
    getGenres().then(data => setGenres(data.genres))
  }, [])

  function changeSort(e: ChangeEvent<HTMLSelectElement>) {
    setSortBy(prev => ({ ...prev, value: e.target.value }))
  }

  function changeSortType() {
    setSortBy({ ...sortBy, type: sortBy.type === "asc" ? "desc" : "asc" })
  }

  function changeRating(e: ChangeEvent<HTMLInputElement>, vector: "left" | "right") {
    const value = Number(e.target.value)

    if ((vector === "left" && rating.right > value) || (vector === "right" && rating.left < value))
      setRating({ ...rating, [vector]: value })
  }

  function selectGenre(genre: Genre) {
    if (selectGenres.some(g => g.id === genre.id)) {
      setSelectGenres(selectGenres.filter(select => select.id !== genre.id))
      return
    }
    setSelectGenres([...selectGenres, genre])
  }

  function reset() {
    setFetching("replace")
    setPage(1)
    setMovies(null)
    setSelectGenres([])
    setRating({
      left: 0.0,
      right: 10.0,
    })
    setSortBy({
      value: sortList[0].value,
      type: "desc",
    })
  }

  function nextPage() {
    if (fetching === "append") return
    setFetching("append")
    setPage(prev => prev + 1)
  }

  function replaceMovies(sort_by: string) {
    setPage(1)
    getFilteredMovies(sort_by, rating.left, rating.right, selectGenres, 1).then(data =>
      setMovies(data.results)
    )
  }

  useEffect(() => {
    const sort_by = `${sortBy.value}.${sortBy.type}`

    if (fetching === "replace") {
      replaceMovies(sort_by)
    }

    if (fetching === "append")
      getFilteredMovies(sort_by, rating.left, rating.right, selectGenres, page)
        .then(data => {
          setMovies(prev => {
            if (prev) return [...prev, ...data.results]
            return [...data.results]
          })
        })
        .finally(() => setFetching("replace"))
  }, [sortBy, rating, selectGenres, page, fetching])

  return {
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
  }
}
