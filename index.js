import { config } from "dotenv";
import { bootApp } from "./boot.js";
import { endpoints } from "./app_modules/index.js";
config();

export const dispatch = bootApp();
dispatch({
  type: "👽",
  payload: {
    port: process.env.PORT,
  },
});

function use(configs) {
  for (let i = 0; i < configs.length; i++) {
    dispatch({ type: "🦕", payload: { middlewares: configs[i] } });
  }
}

function set(configs) {
  for (let i = 0; i < configs.length; i++) {
    dispatch({ type: "👑", payload: configs[i] });
  }
}

function make(endpoints) {
  for (let i = 0; i < endpoints.length; i++) {
    dispatch(endpoints[i]);
  }
}
make(endpoints);
