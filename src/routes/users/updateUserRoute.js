const express = require('express');
const Users = require('../../models/Users/Users');
const updateUserRoute = express.Router();

updateUserRoute.patch('/users/:email', /* verifyToken, */ async(req, res) => {
    try{
       const email = req.params.email;
       const courseId = req.query.courseId;
       console.log('courseId:', courseId);

       const query = { email: email};
       const user = await Users.findOne(query);
       const courseIds = user?.courseIds || [];
       
       courseIds.push(courseId)
       const updateDoc = {
        $set: {
            courseIds : courseIds
        }
       }
       const result = await Users.updateOne(query, updateDoc)
       res.send(result);

    }catch (error) {
      console.error('Error updating user status:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = updateUserRoute;