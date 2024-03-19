import { config } from "dotenv";
config();
export const { PORT, POSTGRES_URI, SECRET_KEY } = process.env;
