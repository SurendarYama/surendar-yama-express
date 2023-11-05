const middlewares = { before: [], after: [] };

export default [
  {
    type: "🧜🏽‍♂️",
    payload: {
      path: "/user",
      method: "get",
      middlewares,
      controller(req, res) {
        res.json({ message: "Hello World" });
      },
    },
  },
  {
    type: "🧜🏽‍♂️",
    payload: {
      path: "/user/about",
      method: "get",
      middlewares,
      controller(req, res) {
        res.json({ message: "surendar yama..." });
      },
    },
  },
];
