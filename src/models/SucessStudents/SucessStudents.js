const { Schema, model} = require('mongoose');

const SucessStudentsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    achievement:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    feedback:{
        type: String
    },
    courseTitle: {
        type: String
    }
    
});

const SucessStudents = model('SucessStudents', SucessStudentsSchema);

module.exports = SucessStudents;

