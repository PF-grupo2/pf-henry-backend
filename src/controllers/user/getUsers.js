import { user } from "../../database/index.js";

const getUsers = async (req, res) => {
    try {
        const users = await user.findAll();
        res.json(users);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  }

  export default getUsers