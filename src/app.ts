import { Context } from "hono";
import { BlankEnv, BlankInput } from "hono/types";

export const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
];

export const greet = (c: Context<BlankEnv, "/hello/:name", BlankInput>) => {
  return c.text(`Hello ${c.req.param("name")}!`);
};
