import { request, response } from "express";

const isAdmin = (req = request, res = response, next) => {
  if (!req.user) {
    return res.status(400).json({
      message: "No se encontró un token en la petición",
    });
  }

  const { name, isAdmin } = req.user;
  if (!isAdmin)
    return res.status(401).json({
      msg: `El usuario ${name} no es administrador. Permiso de operación denegado`,
    });

  next();
};

export default {
  isAdmin,
};
