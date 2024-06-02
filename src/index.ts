import "dotenv/config";
import { debug } from "console";
import { server } from "./server";
import { PORT } from "./config/constant";

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

process.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
