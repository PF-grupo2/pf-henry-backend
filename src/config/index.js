import { config } from "dotenv";
config();
export const { PORT, POSTGRES_URI } = process.env;
