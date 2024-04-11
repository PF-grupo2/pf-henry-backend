import { config } from "dotenv";
config();
const {
  DB_DEPLOY,
  POSTGRES_URI,
  PORT,
  SECRET_KEY,
  ACCESS_TOKEN,
  GMAIL_USER,
  GMAIL_PASSWORD,
  NODE_ENV,
} = process.env;

const DATABASE = NODE_ENV
  ? {
      URI: DB_DEPLOY,
      CONFIG: {
        logging: false,
        native: false,
        dialectOptions: {
          ssl: {
            require: true,
          },
        },
      },
    }
  : {
      URI: POSTGRES_URI,
      CONFIG: {
        logging: false,
        native: false,
      },
    };

export const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
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
export { PORT, SECRET_KEY, ACCESS_TOKEN, DATABASE };
