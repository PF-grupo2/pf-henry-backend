import { User } from "../../database/index.js";
import { bcryptHelpers } from "../../helpers/index.js";

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
    case phone && !/^\+\d{9,12}$/.test(phone):
      return res.status(400).json("Invalid phone format");
  }

  try {
    const foundUser = await User.findByPk(id);
    if (!foundUser) return res.status(404).json({ error: "User Not Found" });

    if (name) foundUser.name = name;
    if (mail) foundUser.mail = mail;
    if (password) {
      const hashedPassword = await bcryptHelpers.hashPassword(password);
      foundUser.password = hashedPassword;
    }
    if (phone) foundUser.phone = phone;

    const updatedUser = await foundUser.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default putUser;
