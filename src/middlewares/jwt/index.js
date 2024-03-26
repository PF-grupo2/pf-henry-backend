import { request, response } from "express";
import { User } from "../../database/index.js";
import { jwtHelpers } from "../../helpers/index.js";

const validatJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token)
    return res.status(401).json({
      message: "Acceso denegado - No hay token en la petición",
    });

  try {
    const { id } = jwtHelpers.verifyToken(token);
    const user = await User.findByPk(id);
    if (!user)
      return res.status(401).json({
        message: "Acceso denegado - Token no válido",
      });

    if (!user.status)
      return res.status(401).json({
        message: "Token no válido - Usuario no válido",
      });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Token no válido",
    });
  }
};

export default { validatJWT };
