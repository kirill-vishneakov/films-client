import { getConfiguration } from "@/app/api"

const sizes = {
  card: "w185",
  poster: "original",
  page: "w342",
}

export function getImageUrl(
  path: string | null | undefined,
  type: keyof typeof sizes,
  variant = "Нет данных"
) {
  const conf = getConfiguration()
  if (conf && path) return `${conf.images.base_url}${sizes[type]}/${path}`
  return `https://placehold.co/800?text=${variant}`
}
