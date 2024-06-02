import { Router } from "express";
import { sensorRoute } from "./sensor";

const route = Router();

route.get("/nlp", (_, res) => {
  res.json({
    message: "Hello from route v1!",
    description: "NLP route handler from v1",
  });
});

route.use("/sensor", sensorRoute);

export { route as routeV1 };
