import { IoType, SensorPayload, SocketType } from "../../types";

export function registerSensorHandler(io: IoType, socket: SocketType) {
  // NOTE: send sensor payload to client when sensor:send emited
  const onSensorSend = (sensorPayload: SensorPayload) => {
    io.emit("sensor:broadcast", sensorPayload);
  };

  socket.on("sensor:send", onSensorSend);
}

export function broadcastSensorPayload(
  io: IoType,
  sensorPayload: SensorPayload,
) {
  io.sockets.emit("sensor:broadcast", sensorPayload);
}
