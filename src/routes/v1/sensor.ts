import { Router } from "express";
import { validateRequestBody } from "../../middlewares";
import { sensorSchema } from "../../schemas";
import { broadcastSensorPayload } from "../websocket";
import { io } from "../../server";

const router = Router();

router.post("/", validateRequestBody(sensorSchema), (req, res) => {
  broadcastSensorPayload(io, req.body);

  res.status(200).json({
    message: "success",
  });
});

export { router as sensorRoute };
