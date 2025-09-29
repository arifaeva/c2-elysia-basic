import { Elysia, t } from "elysia";
import { userRouter } from "./routes/userRoute";
import { productRouter } from "./routes/productRoute";
import { revenueRouter } from "./routes/revenueRoute";

// type inferring
const app = new Elysia()
  .onBeforeHandle(() => {
    // Authorization ???
  })
  .group("/api/v1", (app) =>
    app
      // routes
      .use(userRouter)
      .use(productRouter)
      .use(revenueRouter)
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
