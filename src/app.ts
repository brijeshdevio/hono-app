import { Hono } from "hono";

export const appRoutes = new Hono();

appRoutes.get("/welcome", (c) => {
  return c.text(welcomeStrings.join("\n\n") + " Welcome!");
});

export const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
];
