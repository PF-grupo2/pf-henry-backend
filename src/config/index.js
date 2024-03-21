import { config } from "dotenv";
config();

export const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
};

export const { PORT, POSTGRES_URI, SECRET_KEY } = process.env;
