const express = require('express');
const Users = require('../../models/Users/Users');
const verifyToken = require('../../middlewares/verifyToken');
const getUserRoute = express.Router();

getUserRoute.get('/users/:email', verifyToken, async(req, res) => {
    try{
      const email = req.params.email;
      const query = { email: email };
      const result = await Users.findOne(query);
     
      res.send(result);
    }catch (error) {
      console.error('Error updating user status:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = getUserRoute;