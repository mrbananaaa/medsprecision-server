import "dotenv/config";
import { debug } from "console";
import { app } from "./api";
import { PORT } from "./config";
import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer(app).listen(PORT, () =>
  console.log(`listening on port ${PORT}`),
);

const socket = new Server(server, {
  cors: {
    origin: "*",
  },
});

socket.on("connection", (socket) => {
  console.log("user connected!");

  socket.on("disconnect", () => {
    console.log("user disconnected!");
  });
});

process.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
