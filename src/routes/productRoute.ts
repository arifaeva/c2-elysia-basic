import { Elysia } from "elysia";

export const productRouter = new Elysia({ prefix: "/products" })
  // routes
  .get("/", () => {
    return "product Router";
  });
