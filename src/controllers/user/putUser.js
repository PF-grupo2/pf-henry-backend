import { user } from "../../database/index.js";
import { hashPassword } from "../../helpers/bcrypt/index.js";

const putUser = async (req, res) => {
    const { id } = req.params;
    const { name, mail, password, phone } = req.body;

    try {
        const foundUser = await user.findById(id);
        if (!foundUser) return res.status(404).json({ error: 'User Not Found' })

        if(name) foundUser.name = name;
        if(mail) foundUser.mail = mail;
        if(password) foundUser.password = hashPassword(password);
        if(phone) foundUser.phone = phone;

        const updatedUser = await foundUser.save();
        res.status(200).json(updatedUser);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  }

  export default putUser