import { Elysia, t } from "elysia";
import { userDTO } from "./models";

type User = {
  id: number,
  name: string
}
const users: User[] = [
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
    data: users 
  }))
  .get('/:id', ({ params: { id } }) => ({
    data: users.find(user => user.id == Number(id))
  }))
  .post('/', ({ body, set }) => {
    const newUser: User = {
      id: users.length + 1,
      name: body.name
    }
    users.push(newUser);

    set.status = 201;
    return users;
  }, {
    body: userDTO
  }),
);

export default userPlugin;