import { Router } from "express";

const route = Router();

route.get("/nlp", (_, res) => {
  res.json({
    message: "Hello from route v1!",
    description: "NLP route handler from v1",
  });
});

route.post("/sensor", (req, res) => {
  console.log(req.body);

  res.status(200);

  res.json({
    message: "success!",
  });
});

export { route as routeV1 };
