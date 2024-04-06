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

export const mercadoPagoConfig = {
  accessToken: process.env.ACCESS_TOKEN,
};

export const ENUMS = {
  brands: [
    "Puma",
    "Nike",
    "Reebok",
    "Adidas",
    "Asics",
    "Merrell",
    "New Balance",
    "Salomon",
    "Mizuno",
    "Brooks",
    "Timberland",
    "Skechers",
    "Columbia",
    "Hoka One One",
    "Keen",
    "Under Armour",
    //"Topper",
  ],
  styles: [
    "Basquet",
    "Futbol",
    "Hockey",
    "Motosport",
    "Natacion",
    "Outdoor",
    "Running",
    "Tenis",
    "Training",
  ],
  colors: [
    "Blanco",
    "Negro",
    "Azul",
    "Amarillo",
    "Gris",
    "Verde",
    "Rojo",
    "Rosado",
    "Violeta",
  ],

  genders: ["Hombre", "Mujer", "Unisex"],
};

export const { PORT, POSTGRES_URI, SECRET_KEY } = process.env;
