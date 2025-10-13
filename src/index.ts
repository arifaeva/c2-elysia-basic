import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

// type inferring
const app = new Elysia()
  .use(
    swagger({
      path: "/docs",
      scalarConfig: {
        defaultHttpClient: {
          targetKey: "javascript",
          clientKey: "fetch",
        },
      },
    })
  )
  // routes
  .post(
    "/",
    () => {
      return { message: "Hello!" };
    },
    {
      body: t.Object({
        name: t.String(),
        desc: t.String(),
      }),
      tags: ["products"],
      detail: {
        responses: {
          201: {
            description: "Create product success",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                  },
                },
              },
            },
          },
          500: {
            description: "Create product failed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errorMessage: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
