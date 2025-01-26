const mongoose = require('mongoose');


const todosSchema = new mongoose.Schema({
    taskname: {
        type: String,
        required: true,
        minlength: [2, 'Name must be at least 2 characters long']
    },
    duration: {
        type: String,
        required: true,
    }
})




const todosModel = mongoose.model('todos', todosSchema);


module.exports = todosModel;