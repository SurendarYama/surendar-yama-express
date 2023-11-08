import { middlewares } from "../helpers/index.js";

export default [
  {
    path: "/user",
    method: "get",
    middlewares,
    controller(req, res) {
      res.json({ message: "Hello World" });
    },
  },
  {
    path: "/user/about",
    method: "get",
    middlewares,
    controller(req, res) {
      res.json({ message: "surendar yama..." });
    },
  },
];
