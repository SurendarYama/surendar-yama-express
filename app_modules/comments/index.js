const middlewares = { before: [], after: [] };

export default [
  {
    type: "🧜🏽‍♂️",
    payload: {
      path: "/",
      method: "get",
      middlewares,
      controller(req, res) {
        res.json({ message: "Comments..." });
      },
    },
  },
  {
    type: "🧜🏽‍♂️",
    payload: {
      path: "/comments",
      method: "get",
      middlewares,
      controller(req, res) {
        res.json({ message: "Awesome!..." });
      },
    },
  },
];
