import { Hono } from "hono";
import { greet, welcomeStrings } from "./app";

const app = new Hono();

app.get("/", (c) => {
  return c.text(welcomeStrings.join("\n\n"));
});

app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

app.get("/hello/:name", greet);

export default app;
