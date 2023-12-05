const express = require("express");
const Courses = require("../../models/Courses/Courses");
const postCourseRoute = express.Router();

postCourseRoute.post("/courses", async (req, res) => {
  try {
    const item = await req.body;
    // console.log(item);
    const existingcourse = await Courses.findOne({
      courseTitle: item.courseTitle,
    });
    if (existingcourse) {
      return res.status(400).json({ message: "This course already exists" });
    }
    const newCourse = new Courses(item)
    // console.log(newCourse);
    const result = await newCourse.save();
    console.log(result);
    res.send(result)
  } catch (error) {
    console.error("Error inserting course data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = postCourseRoute;