export default [
  {
    type: "🧜🏽‍♂️",
    payload: {
      path: "/",
      method: "get",
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
      controller(req, res) {
        res.json({ message: "Awesome!..." });
      },
    },
  },
];
