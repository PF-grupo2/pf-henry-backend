import { User } from "../../database/index.js";

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id)
    await user.update({ status: user.status===false });
    res.status(200).json(
      user.status===true
          ? {message: `ban to user: ${user.name}, removed`}
          : {message: `banned user: ${user.name}`}
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default deleteUser;
