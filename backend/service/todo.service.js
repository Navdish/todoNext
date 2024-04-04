const { todo } = require('../model')
const CustomError = require('../lib/error');
// const { todos } = require('../model/sequelize')

exports.fetchList = async()=> {
    const response = await todo.find();
    if(!response) throw new CustomError("Could not find any list item", 204);
    return response;
}

exports.createListItem = async({data})=> {
    const {content} = data;
    const check = await todo.find({content: content});
    if(check.length > 0) throw new CustomError("Duplicate item", 409);
    const response = await todo.create({content});
    if(!response) throw new CustomError("Could not create new list item", 500);
    return response;
}

exports.updateListItem = async({params, data})=> {
    const {id} = params;
    const {content} = data;
    const check = await todo.findById(id);
    if(!check) throw new CustomError("data not found", 404);
    const response = await todo.findByIdAndUpdate(id, {content}, {new: true});
    if(!response) throw new CustomError("Could not update list item", 500);
    return response;
}

exports.deleteListItem = async({data})=> {
    const {_id} = data;
    const check = await todo.findById(_id);
    if(!check) throw new CustomError("data not found", 404);
    const response = await todo.deleteById(_id);
    if(!response) throw new CustomError("Could not delete list item", 500);
    return response;
}