export default [
  {
    path: "/",
    method: "get",
    controller(req, res) {
      res.json({ message: "Comments..." });
    },
  },
  {
    path: "/comments",
    method: "get",
    controller(req, res) {
      res.json({ message: "Awesome!..." });
    },
  },
];
