import { Elysia } from "elysia";

type User = {
  id: number,
  name: string
}
const USERS: User[] = [
  { id: 1, name: "Rico" },
  { id: 2, name: "Vic" },
  { id: 3, name: "Nico" },
  { id: 4, name: "Coco" },
  { id: 5, name: "Pico" },
];

// define plugin
const userPlugin = new Elysia();

userPlugin.group("/users", (app) => app
  .get('/', () => ({
    data: USERS 
  }))
  .get('/:id', ({ params: { id } }) => ({
    data: USERS.find(user => user.id == Number(id))
  }))
);

export default userPlugin;