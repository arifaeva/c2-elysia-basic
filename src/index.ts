import { Elysia, t } from "elysia";

// type inferring
const app = new Elysia()

  .guard((app) =>
    app
      .onBeforeHandle(() => {
        console.log("something");
      })
      // Routes
      .post("/products", ({ set }) => {
        set.status = 201;
        return { message: "Hello!" };
      })
  )

  // Port
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
