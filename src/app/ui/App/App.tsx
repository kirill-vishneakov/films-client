import { Route, Routes } from "react-router"
import type { Menu } from "@/common/types"
import { MoviesProvider } from "@/app/model"
import { Footer, Header } from "@/common/components"
import { MainPage } from "@/app/ui/MainPage"
import { FilteredPage } from "@/features/filters/ui"
import { CategoryPage } from "@/features/category/ui"

import styles from "./App.module.css"
import { QueuePage } from "@/features/queue/ui"
import { MoviePage } from "@/features/movie/ui"
import { TopPage } from "@/features/top/ui"

export function App() {
  const menu: Menu[] = [
    {
      title: "Главная",
      link: "/",
      element: <MainPage />,
    },
    {
      title: "Категории фильмов",
      link: "/movies/popular",
      element: <CategoryPage />,
    },
    {
      title: "Фильтры фильмов",
      link: "/filtered-movies",
      element: <FilteredPage />,
    },
    {
      title: "Очередь",
      link: "/favorites",
      element: <QueuePage />,
    },
    {
      title: "Топ",
      link: "/top",
      element: <TopPage />,
    },
  ]

  return (
    <div className={styles.app}>
      <Header menu={menu} />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <MoviesProvider>
              <Routes>
                {menu.map(({ link, element }) => {
                  if (link === "/movies/popular")
                    return <Route key={link} path="/movies/:category" element={element} />
                  return <Route key={link} path={link} element={element} />
                })}
                <Route path="movie/:movieId" element={<MoviePage />} />
              </Routes>
            </MoviesProvider>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
