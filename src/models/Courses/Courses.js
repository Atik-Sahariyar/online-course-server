const { Schema, model} = require('mongoose');

const CoursesSchema = new Schema({
    courseTitle: {
        type: String,
        required: true
    },
    instructor:{
        type: String,
        required: true
    },
    enrollmentStartDate:{
        type: String
    },
    enrollmentLastDate:{
        type: String
    },
    description: {
        type: String
    }, 
    price: {
        type: Number
    }, 
    imageURL: {
        type: String
    }, 
    syllabus: {
       type: Array
    }
    
});

const Courses = model('Courses', CoursesSchema);

module.exports = Courses;


