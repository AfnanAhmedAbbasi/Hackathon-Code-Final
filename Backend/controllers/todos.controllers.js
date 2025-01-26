const todosService = require("../services/todo.service");


module.exports.postTodos = async (req, res) => {
    console.log(req.body);
    try {
        const { taskname, duration } = req.body;

        if (!taskname || !duration) {
            return res.status(400).json({ message: "Both taskname and duration are required" });
        }

        const todo = await todosService.createTodosService({
            taskname: taskname,
            duration: duration
        });

        return res.status(201).json({ message: "Todo created successfully", todo });
    } catch (error) {
        console.error("Error creating todo:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports.getTodos = async (req, res,) => {
    try {
        const todos = await todosService.getTodosService();
        return res.status(200).json({ message: "Todos fetched successfully", todos });
    } catch (error) {
        console.error("Error fetching todos:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}





module.exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        if (!id) {
            return res.status(400).json({ message: "Todo ID is required!" });
        }

        const updatedTodo = await todosService.updateTodoService(id, updatedData);

        return res.status(200).json({
            message: "Todo updated successfully",
            updatedTodo,
        });
    } catch (error) {
        console.error("Error updating todo:", error.message);
        return res.status(500).json({ message: error.message });
    }
};







module.exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ message: "Todo ID is required!" });
        }

        const deletedTodo = await todosService.deleteTodoService(id);

        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found!" });
        }

        return res.status(200).json({
            message: "Todo deleted successfully",
            deletedTodo,
        });
    } catch (error) {
        console.error("Error deleting todo:", error.message);
        return res.status(500).json({ message: error.message });
    }
};



