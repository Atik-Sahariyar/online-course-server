const { Schema, model} = require('mongoose');

const TeachersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    image:{
        type: String
    }
    
});

const Teachers = model('Teachers', TeachersSchema);

module.exports = Teachers;


