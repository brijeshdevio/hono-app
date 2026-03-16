import { Hono } from "hono";
import { greet } from "./controller";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));
app.get("/greet", greet);

export default app;
