import { z } from "zod";
import { sensorSchema } from "../schemas";

export type SensorPayload = z.infer<typeof sensorSchema>;
