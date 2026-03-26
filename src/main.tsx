import { createRoot } from "react-dom/client"
import { App } from "./App.tsx"
import "./index.css"
import { initConfig } from "./api/api.tsx"

async function bootstrap() {
  await initConfig()

  createRoot(document.getElementById("root")!).render(<App />)
}

bootstrap()
