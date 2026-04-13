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
