import { Server as HTTPServer, IncomingMessage, ServerResponse } from "http";
import { Server } from "socket.io";
import { SensorPayload, SocketType } from "../types";
import { registerSensorHandler } from "../routes/websocket";

export interface ServerToClientEvents {
  "sensor:broadcast": (sensorPayload: SensorPayload) => void;
}

export interface ClientToServerEvents {
  "sensor:send": (sensorPayload: SensorPayload) => void;
}

export interface InterServerEvents {}

export interface SocketData {}

export function createSocketIo(
  server: HTTPServer<typeof IncomingMessage, typeof ServerResponse>,
) {
  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(server, { cors: { origin: "*" } });

  const onConnection = (socket: SocketType) => {
    registerSensorHandler(io, socket);
  };

  io.on("connection", onConnection);

  return io;
}
