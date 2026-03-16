import { Context, Hono } from "hono";

export const greet = (c: Context) => {
  return c.text("Hello from controller - Hono!");
};

export const routes = new Hono();
routes.get("/greet", greet);
