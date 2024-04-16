import { User } from "../../database/index.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({/*attributes:{exclude:["password"]}*/});
    const sortedUsers = users.sort((a, b) => a.mail.localeCompare(b.mail));
    res.json(sortedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getUsers;
