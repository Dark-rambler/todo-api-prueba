const express = require('express');
const { getTodosByUser, getTodoById, createTask } = require('../controllers/todosController');
const router = express.Router();

router.get('/users/:id/todos', getTodosByUser);
router.get('/todos/:id', getTodoById);
router.post('/todos/:id/task', createTask);

module.exports = router;
