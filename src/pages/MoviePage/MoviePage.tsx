import { useParams } from "react-router"

export function MoviePage() {
  const { movieId } = useParams()
  return <div>MoviePage: {movieId}</div>
}
