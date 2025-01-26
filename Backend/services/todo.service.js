const todosModel = require("../models/todos.model");

module.exports.createTodosService = async ({ taskname, duration }) => {
    if (!taskname || !duration) {
        throw new Error("All fields are required!");
    }

    const todos = new todosModel({
        taskname: taskname,
        duration: duration
    });

    await todos.save();
    return todos;
};



module.exports.getTodosService = async () => {
    const todos = await todosModel.find(); 
    return todos;
};



module.exports.updateTodoService = async (id, updatedData) => {
    if (!id || !updatedData) {
        throw new Error("ID and updated data are required!");
    }   
    const updatedTodo = await todosModel.findByIdAndUpdate(id, updatedData, {
        new: true, 
        runValidators: true,
    });

    if (!updatedTodo) {
        throw new Error("Todo not found!");
    }

    return updatedTodo;
};


module.exports.deleteTodoService = async (id) => {
    if (!id) {
        throw new Error("Todo ID is required!");
    }

    
    const deletedTodo = await todosModel.findByIdAndDelete(id);

    if (!deletedTodo) {
        throw new Error("Todo not found!");
    }

    return deletedTodo;
};