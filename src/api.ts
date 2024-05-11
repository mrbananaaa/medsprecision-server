import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { corsOptions } from "./config";
import { routeV1 } from "./routes/v1";

export const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/ping", (_, res) => {
  res.status(200);

  res.json({
    message: "pong",
    status: "ok",
  });
});

app.use("/v1", routeV1);
