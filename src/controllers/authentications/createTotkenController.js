const generateToken = require("../../utis/generateToken");

const createJwtTokenController = async (req, res) => {
    try {
      const user = req.body;
   
      const token = await generateToken(user);
      res.send({ token })
    } catch (error) {
      console.error('Error jwt token create :', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  module.exports = createJwtTokenController;