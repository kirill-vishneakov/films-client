import type { MovieRes, Pageble } from "@/common/types"

export interface Movies {
  popular: Pageble<MovieRes> | null
  topRated: Pageble<MovieRes> | null
  upcoming: Pageble<MovieRes> | null
  nowPlaying: Pageble<MovieRes> | null
}
