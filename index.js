import express from "express";
import { config } from "dotenv";
config();
const PORT = process.env.PORT || 9909;

const useApp = function (express, port) {
  const app = express();
  app.listen(port, () => console.log(`Server is running on port ${port}`));

  const dispatch = function (action) {
    app[action.payload.method](
      action.payload.path,
      ...action.payload.middlewares,
      action.payload.controller
    );
  };
  return [app, dispatch];
};

const [app, dispatch] = useApp(express, PORT);

dispatch({
  payload: {
    method: "get",
    middlewares: [
      (req, res, next) => {
        console.log("From middleware ...");
        next();
      },
    ],
    path: "/",
    controller: function (req, res) {
      res.send("Hello World");
    },
  },
});
