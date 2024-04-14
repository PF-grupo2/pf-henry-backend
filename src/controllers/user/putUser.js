import { bcryptHelpers } from "../../helpers/index.js";
import { User } from "../../database/index.js";

const putUser = async (req, res) => {
  const { id } = req.params;
  const { name, mail, password, phone } = req.body;

  switch (true) {
    case name && (name.length > 25 || name.length < 4):
      return res.status(400).json("Name has to be between 4 and 25 characters");
    case mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail):
      return res.status(400).json("Invalid mail format");
    case password && (password.length > 25 || password.length < 5):
      return res
        .status(400)
        .json("Password has to be between 5 and 25 characters");
    case password && !/\d/.test(password):
      return res.status(400).json("Password must include at least one number");
  }

  try {
    const user = await User.findByPk(id);
    if (name) user.name = name;
    if (mail) user.mail = mail;
    if (password) {
      const hashedPassword = await bcryptHelpers.hashPassword(password);
      user.password = hashedPassword;
    }
    if (phone) user.phone = phone;
    await user.save();
    res.status(200).json({
      message: `Información actualizada con éxito al usuario: ${user.name}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default putUser;
