import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'watch-hub-d3nhsls4f-nitesh-kumar-kumawats-projects.vercel.app
/api/v1'
    }
  }
})
