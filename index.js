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

function make(endpoints) {
  for (let i = 0; i < endpoints.length; i++) {
    dispatch(endpoints[i]);
  }
}
make(endpoints);
