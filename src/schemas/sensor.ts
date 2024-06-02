import { z } from "zod";

export const sensorSchema = z.object({
  suhu: z.string(),
  detak_jantung_per_menit: z.string(),
  diastole: z.string(),
  sistole: z.string(),
});
