const Users = require("../../models/Users/Users");

const getAdminController = async (req, res) => {

   try{
    const email = req.params.email;
    // if (email !== req.decoded.email) {
    //   return res.status(403).send({ message: 'forbidden access' })
    // }
    const query = { email: email };
    const user = await Users.findOne(query);
    let admin = false;
    if (user) {
      admin = user?.role === 'admin';
    }
    res.send({ admin })
   }catch (error) {
    console.error('Error  getting admin :', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  };

  module.exports = getAdminController