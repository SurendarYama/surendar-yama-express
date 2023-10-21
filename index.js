import express from "express";
import { config } from "dotenv";
import { useApp } from "./boot.js";

config();
const PORT = process.env.PORT || 9909;

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
