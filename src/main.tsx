import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import { initConfig } from "./app/api"
import { App } from "./app/ui"
import "./index.css"

async function bootstrap() {
  await initConfig()

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="films-client">
      <App />
    </BrowserRouter>
  )
}

bootstrap()
