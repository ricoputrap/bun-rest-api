import { Elysia } from "elysia";

const app = new Elysia()
  .state('version', 1)
  .decorate('getDate', () => Date.now())
  .get("/", () => "Hello Elysia")
  .get("/posts", ({ store, getDate }) => ({
    data: [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
      { id: 3, title: "Post 3" },
    ],
    version: store.version,
    date: getDate()
  }))
  .get("/posts/:id", ({ params: { id } }) => { return { id } })
  .post("/posts", ({ body, set }) => {
    set.status = 201;
    return body;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
