import { User } from "../../database/index.js";

const giveAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id)
    await user.update({ isAdmin: user.isAdmin===false });
    res.status(200).json(
        user.isAdmin===true
            ? {message: `Succesfully given admin to user: ${user.name}`}
            : {message: `Succesfully removed admin from user: ${user.name}`}
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default giveAdmin;