import "dotenv/config";
import { debug } from "console";
import { app } from "./api";
import { PORT } from "./config";

const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));

process.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
