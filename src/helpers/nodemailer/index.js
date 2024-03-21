import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import { nodemailerConfig } from "../../config/index.js";
const sendEmail = (to, name) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const pathname = path.join(__dirname, "../../html/register.html");
  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name);

  const transporter = nodemailer.createTransport(nodemailerConfig);
  transporter.sendMail({
    from: `'"Welcome to Shoe Kingdom" <${nodemailerConfig.auth.user}>'`,
    to,
    subject: `Welcome ${name} to Shoe Kingdom`,
    html: file,
  });
};

export default { sendEmail };
