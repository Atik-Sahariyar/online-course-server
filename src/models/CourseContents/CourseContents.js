const { Schema, model} = require('mongoose');

const ContentsSchema = new Schema({
    courseId: {
        type: String,
        required: true
    },
    videoTitle:{
        type: String,
        required: true
    },
    videoURL:{
        type: String,
        required: true
    },
    
});

const Contents = model('Contents', ContentsSchema);

module.exports = Contents;


