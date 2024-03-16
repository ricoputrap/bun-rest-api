import { Elysia } from "elysia";
import userPlugin from "./users";
import postPlugin from "./posts";

const app = new Elysia()
  .use(userPlugin)
  .use(postPlugin)
  .state('version', 1)
  .decorate('getDate', () => Date.now())
  .get("/", ({ store, getDate }) => ({
    version: store.version,
    date: getDate(),
    text: "Hello, Elysia!"
  }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
