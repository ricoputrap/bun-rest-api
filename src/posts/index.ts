import { Elysia } from "elysia";
import posts from "./data";

const postPlugin = new Elysia();

postPlugin.group("/posts", (app) => app
  .get("/", () => ({
    data: posts
  }))
  .get("/:id", ({ params: { id } }) => ({
    data: posts.find(post => post.id == Number(id))
  }))
);

export default postPlugin;