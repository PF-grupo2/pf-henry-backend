import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import { nodemailerConfig } from "../../config/index.js";

const generatePathName = (fileName) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const pathname = path.join(__dirname, `../../html/${fileName}.html`);
  return pathname;
};

const send = (to, file, subject) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  transporter.sendMail({
    from: nodemailerConfig.auth.user,
    to,
    subject,
    html: file,
  });
};

const sendEmail = (to, name) => {
  const pathname = generatePathName("register");
  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name);
  send(to, file, "¡Shoe Kingdom te da la Bienvenida!");
};

const saleNotification = (to, name, products) => {
  const pathname = generatePathName("sale");
  let productsHtml = "";
  let total = 0;
  products.forEach((product) => {
    const subtotal = (product.unit_price * product.quantity).toFixed(2);
    productsHtml += `<tr>
        <td>${product.title}</td>
        <td>$ ${product.unit_price.toFixed(2)}</td>
        <td>${product.quantity}</td>  
        <td>$ ${subtotal}</td> 
      </tr>`;

    total += Number(subtotal);
  });

  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name)
    .replace("${products}", productsHtml)
    .replace("${total}", total.toFixed(2));
  send(to, file, "Compra realizada con éxito");
};

export default { sendEmail, saleNotification };
