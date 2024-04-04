const mongoose = require('mongoose')

const Todo = mongoose.Schema({
    content:{
        type: String,
        require: true,
    }
},{timestamps: true})


const Todos =  mongoose.model('todoModel', Todo);
module.exports = Todos;