import { Router } from "express";
import { userControllers } from "../../controllers/index.js";

// Descomentar esto para usar
/*
import {
  jwtMiddlewares,
  securityMiddlewares,
} from "../../middlewares/index.js";
*/
const router = Router();

router.post("/users", userControllers.postUser);
router.put("/users/:id", userControllers.putUser);
router.put("/userDelete/:id", userControllers.deleteUser);
router.get("/users", userControllers.getUsers);

// Estas acciones requieren de un token y verificar si el usuario ha sido autenticado correctamente
// Para obtener la lista de usuarios adicionalmente debemos verificar si el usuario que quiere la lista es un administrador

// La forma de enviar al token desde el frontend a traves de una peticion axios es la siguiente
// Obligatoriamente debe ser enviada con el nombre de x-token
// axios(url,data,{headers: { "x-token": token}   })
// Para usar descomentar estas lineas y borrar las peticiones similares

/*
router.put("/users/:id", jwtMiddlewares.validatJWT, userControllers.putUser);
router.put(
  "/userDelete/:id",
  jwtMiddlewares.validatJWT,
  userControllers.deleteUser
);
router.get(
  "/users",
  jwtMiddlewares.validatJWT,
  securityMiddlewares.isAdmin,
  userControllers.getUsers
);
*/

export default router;
