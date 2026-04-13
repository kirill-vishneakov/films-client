import type { Genre, MovieRes } from "@/common/types"
import { useEffect, useState, type ChangeEvent } from "react"
import { getFilteredMovies, getGenres, getSearchMovies } from "@/app/api"
import type { SortBy, SortList } from "../types"

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

export function useFilters() {
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
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getGenres().then(data => setGenres(data.genres))
  }, [])

  function changeSort(e: ChangeEvent<HTMLSelectElement>) {
    setSortBy(prev => ({ ...prev, value: e.target.value }))
    setPage(1)
  }

  function changeSortType() {
    setSortBy({ ...sortBy, type: sortBy.type === "asc" ? "desc" : "asc" })
    setPage(1)
  }

  function changeRating(e: ChangeEvent<HTMLInputElement>, vector: "left" | "right") {
    setPage(1)
    const value = Number(e.target.value)

    if ((vector === "left" && rating.right > value) || (vector === "right" && rating.left < value))
      setRating({ ...rating, [vector]: value })
  }

  function selectGenre(genre: Genre) {
    setPage(1)
    if (selectGenres.some(g => g.id === genre.id)) {
      setSelectGenres(selectGenres.filter(select => select.id !== genre.id))
      return
    }
    setSelectGenres([...selectGenres, genre])
  }

  function reset() {
    setIsLoading(false)
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
    if (isLoading) return
    if ((!movies || !movies.length) && page === 1) return
    setPage(prev => prev + 1)
    setIsLoading(true)
  }

  useEffect(() => {
    async function getFiltered() {
      const sort_by = `${sortBy.value}.${sortBy.type}`

      setIsLoading(true)

      await getFilteredMovies(sort_by, rating.left, rating.right, selectGenres, page)
        .then(data => {
          setMovies(prev => {
            if (page > 1 && prev) return [...prev, ...data.results]
            return [...data.results]
          })
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    getFiltered()
  }, [sortBy, rating, selectGenres, page])

  function search(input: string) {
    getSearchMovies(input).then(data => setMovies(data.results))
  }

  return {
    movies,
    isLoading,
    nextPage,
    search,
    filters: {
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
    },
  }
}
