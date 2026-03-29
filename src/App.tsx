import { MainPage } from "./pages/MainPage/MainPage"
import { Header } from "./ui/Header/Header"
import styles from "./App.module.css"
import { Footer } from "./ui/Footer/Footer"
import { Route, Routes } from "react-router"
import { CategoryPage } from "./pages/CategoryPage/CategoryPage"
import { FilteredPage } from "./pages/FilteredPage/FilteredPage"
import { SearchPage } from "./pages/SearchPage/SearchPage"
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage"
import { MoviePage } from "./pages/MoviePage/MoviePage"

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Routes>
              <Route index element={<MainPage />} />
              <Route path="movies/:category" element={<CategoryPage />} />
              <Route path="filtered-movies" element={<FilteredPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="movie/:movieId" element={<MoviePage />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
