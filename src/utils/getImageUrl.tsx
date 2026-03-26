import { getConfiguration } from "../api/api"

const sizes = {
  card: "w185",
  poster: "original",
}

export function getImageUrl(
  path: string | null | undefined,
  type: "card" | "poster",
  variant = "Нет данных"
) {
  const conf = getConfiguration()
  if (conf && path) return `${conf.images.base_url}${sizes[type]}/${path}`
  return `https://placehold.co/800?text=${variant}`
}
