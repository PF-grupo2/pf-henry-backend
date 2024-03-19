import server from "./src/server.js";
import { PORT } from "./src/config/index.js";
import { conn } from "./src/database/index.js";

conn.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
  });
  console.log('Database connected')
}).catch((error) => {
  console.log(error)
})
