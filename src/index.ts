import { Hono } from "hono";
import { appRoutes, welcomeStrings } from "./app";

const app = new Hono();

app.route("/users", appRoutes);

app.get("/", (c) => {
  return c.text(welcomeStrings.join("\n\n"));
});

app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

app.get("/hello/:name", (c) => {
  return c.text(`Hello ${c.req.param("name")}!`);
});

export default app;
