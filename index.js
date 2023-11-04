import { bootApp } from "./boot.js";
import { config } from "dotenv";
config();
const dispatch = bootApp();

const middlewares = { before: [], after: [] };

dispatch({
  type: "👽",
  payload: {
    port: process.env.PORT,
  },
});

dispatch({
  type: "🧜🏽‍♂️",
  payload: {
    path: "/",
    method: "get",
    middlewares,
    controller: function (req, res) {
      res.send("Hello World");
    },
  },
});
