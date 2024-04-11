const deleteUser = async (req, res) => {
  const user = req.user;
  try {
    await user.update({ status: false });
    res.status(200).json({
      message: "Usuario eliminado con éxito",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default deleteUser;
