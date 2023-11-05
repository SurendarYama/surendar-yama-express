import { default as userModule } from "./user/index.js";
import { default as commetsModule } from "./comments/index.js";
export const endpoints = [...userModule, ...commetsModule];
