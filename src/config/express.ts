import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { corsOptions } from "./cors-config";
import { routeV1 } from "../routes/v1";

export const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/v1", routeV1);

app.get("/", (_, res) => res.status(200).json({ message: "Medsprecision" }));
app.get("/ping", (_, res) => res.status(200).json({ message: "pong" }));
