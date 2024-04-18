import { Cart, User } from "../../database/index.js";
import { bcryptHelpers, emailHelpers } from "../../helpers/index.js";

const postUser = async (req, res) => {
  const { name, mail, password, phone, isAdmin } = req.body;

  switch (true) {
    case name.length > 25 || name.length < 4:
      return res.status(400).json("Name has to be between 4 and 25 characters");
    case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail):
      return res.status(400).json("Invalid mail format");
    case password.length > 25 || password.length < 5:
      return res
        .status(400)
        .json("Password has to be between 5 and 25 characters");
    case !/\d/.test(password):
      return res.status(400).json("Password must include at least one number");
  }

  try {
    const hashedPassword = await bcryptHelpers.hashPassword(password);
    const userData = {
      name,
      mail,
      password: hashedPassword,
      phone,
    };
    if (isAdmin) userData.isAdmin = isAdmin;
    const createdUser = await User.create(userData);
    if (!createdUser.isAdmin)
      await Cart.create({
        UserId: createdUser.id,
      });
    // Envío de email de notificación registro al nuevo usuario
    emailHelpers.sendEmail(userData.mail, userData.name);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default postUser;
