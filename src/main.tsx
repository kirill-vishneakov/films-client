import { createRoot } from "react-dom/client"
import { App } from "./App.tsx"
import "./index.css"
import { initConfig } from "./api/api.tsx"
import { BrowserRouter } from "react-router"

async function bootstrap() {
  await initConfig()

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

bootstrap()
