import { Hono } from "hono";

export const app = new Hono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
];

app.get("/", (c) => {
  return c.text(welcomeStrings.join("\n\n"));
});

app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

app.get("/hello/:name", (c) => {
  return c.text(`Hello ${c.req.param("name")}!`);
});
