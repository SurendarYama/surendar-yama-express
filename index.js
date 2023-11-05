import { bootApp } from "./boot.js";
import { config } from "dotenv";
import { endpoints } from "./app_modules/index.js";

config();
export const dispatch = bootApp();

dispatch({
  type: "👽",
  payload: {
    port: process.env.PORT,
  },
});

function make(modules) {
  for (let i = 0; i < modules.length; i++) {
    dispatch(modules[i]);
  }
}
make(endpoints);
