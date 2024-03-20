import { bcryptHelpers, jwtHelpers } from "../../helpers/index.js";
import { User } from "../../database/index.js";

const login = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const user = await User.findOne({
      where: {
        mail,
      },
    });

    if (!user)
      return res.status(401).json({ error: "Credenciales incorrectas" });

    if (!user.status)
      return res.status(404).json({ error: "Usuario no encontrado" });

    const passwordValid = await bcryptHelpers.comparePassword(
      password,
      user.password
    );

    if (passwordValid) {
      const token = jwtHelpers.generateToken({
        id: user.id,
        email: user.email,
      });

      return res.status(200).json({
        user: {
          id: user.id,
          name: user.name,
          mail: user.mail,
          phone: user.phone,
          isAdmin: user.isAdmin,
        },
        token,
      });
    }

    return res.status(401).json({
      error: "Credenciales incorrectas",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export default login;
