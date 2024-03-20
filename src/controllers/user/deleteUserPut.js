import { User } from "../../database/index.js";

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const foundUser = await User.findByPk(id);
    if (!foundUser) return res.status(404).json({ error: "User Not Found" });
    const deletedUser = await foundUser.update({ status: !foundUser.status });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default deleteUser;
