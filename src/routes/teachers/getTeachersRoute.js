const express = require("express");
const Teachers = require("../../models/Teachers/Teachers");
const getTeachersRoute = express.Router();

getTeachersRoute.get("/teachers", async (req, res) => {
  try {
   
      const result = await Teachers.find();
    res.send(result);
  } catch (error) {
    console.error("Error getting teachers data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = getTeachersRoute