import { Router } from "express";

export const routeV1 = Router();

routeV1.get("/nlp", (_, res) => {
  res.json({
    message: "Hello from route v1!",
    description: "NLP route handler from v1",
  });
});
