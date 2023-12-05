const mongoose = require('mongoose');
const express = require("express");
const Courses = require("../../models/Courses/Courses");
const getOneCourseRoute = express.Router();

getOneCourseRoute.get("/courses/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new mongoose.Types.ObjectId(id) };
    const result = await Courses.findOne(query);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting course data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = getOneCourseRoute
