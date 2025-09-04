import { Elysia } from "elysia";

// type inferring
const app = new Elysia()
  // Hooks

  // Routes
  .get("/", () => {
    return { message: "Hello!" }; // json
  })

  // Port
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
