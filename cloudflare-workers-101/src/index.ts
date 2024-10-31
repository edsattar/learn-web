import { Hono } from "hono";

export interface Bindings { }

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (ctx) => {
	return ctx.json({ message: "Hello, World! Hello from Hono!" });
});

export default app;
