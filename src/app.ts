import { Hono } from "hono";
import { greet, routes } from "./controller";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));
app.route("/api", routes);

export default app;
