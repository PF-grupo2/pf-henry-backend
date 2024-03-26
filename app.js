import server from "./src/server.js";
import { PORT } from "./src/config/index.js";
import { conn } from "./src/database/index.js";
import { loader } from "./src/scripts/index.js";




conn
  .sync({ force: true, logging: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
    });
    console.log("Database connected");

    loader();
  })
  .catch((error) => {
    console.log(error);
  });
