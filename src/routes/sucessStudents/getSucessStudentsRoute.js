const express = require('express');
const SucessStudents = require('../../models/SucessStudents/SucessStudents');
const getSucessStudentsRoute = express.Router();

getSucessStudentsRoute.get('/successStudents', async(req, res) => {
  try{

     
       const result = await SucessStudents.find();
      res.send(result)
  }catch (error) {
    console.error("Error getting teachers data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = getSucessStudentsRoute



