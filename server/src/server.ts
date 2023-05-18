import fastify from "fastify"
import cors from "@fastify/cors"
import { memoriesRoutes } from "./routes/memories"

const app = fastify()

app.register(cors, {
  origin: true, // change this to actual URL when/if publishing
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server running on http://localhost:3333")
  })
