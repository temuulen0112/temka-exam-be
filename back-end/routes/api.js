const Todo = require('../models/Todo')
const express = require("express");
const router = express.Router();
const TodoController = require("../controller/TodoController");

// Todo ENDPOINT
router.get("/todo", TodoController.getTodo);
router.post("/todoCreate", TodoController.createTodo);
router.post("/todoUpdate/id/:id", TodoController.updateTodo);
router.post("/todoDelete/id/:id", TodoController.deleteTodo);

module.exports = router;