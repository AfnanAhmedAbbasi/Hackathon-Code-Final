const todosController = require("../controllers/todos.controllers.js")
const express = require("express");
const router = express.Router();

router.get("/todos",  todosController.getTodos);
router.post("/create",  todosController.postTodos);
router.put("/update/:id", todosController.updateTodo);
router.delete("/delete/:id", todosController.deleteTodo);


module.exports = router;


