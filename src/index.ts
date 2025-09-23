import { Elysia } from "elysia";

// type inferring
const app = new Elysia()
  // Hooks

  // Routes
  .get("/", (ctx) => {
    return { message: "Hello!" }; // json
  })
  .get("/products/:productId", (ctx) => {
    const { productId } = ctx.params;
    return { message: `You are accessing product ${productId} endpoint!` }; // json
  })
  .post("/products", ({ body }) => {
    console.log(body);
    return { message: "You are accessing product POST endpoint!" }; // json
  })

  // Port
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
