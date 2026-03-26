import { MainPage } from "./pages/MainPage/MainPage"
import { Header } from "./ui/Header/Header"
import styles from "./App.module.css"
import { Footer } from "./ui/Footer/Footer"

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <MainPage />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
