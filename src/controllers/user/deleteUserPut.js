import { user } from "../../database/index.js";

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const foundUser = await user.findById(id);
        if (!foundUser) return res.status(404).json({ error: 'User Not Found' })
        foundUser.status = false;

        const deletedUser = await foundUser.save();
        res.status(200).json(deletedUser);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  }

  export default deleteUser