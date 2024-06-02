import { createServer } from "http";
import { app } from "./config/express";
import { createSocketIo } from "./config/socket-io";

export const server = createServer(app);
export const io = createSocketIo(server);
