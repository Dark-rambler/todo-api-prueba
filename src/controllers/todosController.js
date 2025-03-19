const { todos, tasks } = require('../data/db');

const getTodosByUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userTodos = todos.filter(todo => todo.userId === userId);

    if (userTodos.length === 0) {
        return res.status(404).json({ message: "No hay listas de tareas para este usuario" });
    }

    res.json(userTodos);
};

const getTodoById = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));

    if (!todo) {
        return res.status(404).json({ message: "Lista de tareas no encontrada" });
    }

    // Obtener las tareas de ese ToDo
    const todoTasks = tasks.filter(task => task.todoId === todo.id);
    res.json({ ...todo, tasks: todoTasks });
};

const createTask = (req, res) => {
    const todoId = parseInt(req.params.id);
    const { title, completed } = req.body;

    // Verificar si el ToDo existe
    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
        return res.status(404).json({ message: "Lista de tareas no encontrada" });
    }

    if (!title) {
        return res.status(400).json({ message: "El título de la tarea es obligatorio" });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        completed: completed ?? 0,
        todoId,
        userId: todo.userId
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

module.exports = { getTodosByUser, getTodoById, createTask };
