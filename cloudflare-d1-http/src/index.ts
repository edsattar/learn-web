import { Hono } from "hono";
import { bearerAuth } from "hono/bearer-auth";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

type Bindings = {
  API_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", prettyJSON(), logger(), async (c, next) => {
  const auth = bearerAuth({ token: c.env.API_KEY });
  return auth(c, next);
});

app.post("/api/all", async (c) => {
  return c.text("/api/all endpoint");
});

app.post("/api/exec", async (c) => {
  return c.text("/api/exec endpoint");
});

app.post("/api/batch", async (c) => {
  return c.text("/api/batch endpoint");
});

export default app;
