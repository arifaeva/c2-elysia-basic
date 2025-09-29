import { Elysia } from "elysia";
import { LoggerDev, LoggerProd } from "../services/logger";

export const revenueRouter = new Elysia({ prefix: "/products" })
  // injection decorator
  .decorate(
    "logger",
    process.env.NODE_ENV === "development" ? new LoggerDev() : new LoggerProd()
  )
  // routes
  .get("/", (ctx) => {
    ctx.logger.log("test");
    return "revenue Router";
  })
  .get("/japan", () => {
    return "revenue from Japan router";
  });
