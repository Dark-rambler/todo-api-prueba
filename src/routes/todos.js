const express = require("express");
const router = express.Router();

let todos = [
  {
    id: 1,
    title: "Universidad",
    keywords: ["estudios", "importante", "academia"],
    userId: 1,
  },
  {
    id: 2,
    title: "Casa",
    keywords: ["oficio", "necesario", "orden"],
    userId: 1,
  },
  {
    id: 3,
    title: "Trabajo",
    keywords: ["proyectos", "plazos", "reuniones"],
    userId: 2,
  },
];

let tasks = [
  {
    id: 1,
    title: "Estudiar para el examen de programación",
    completed: 0,
    todoId: 1,
    userId: 1,
  },
  { id: 2, title: "Ir a clases", completed: 1, todoId: 1, userId: 1 },
  { id: 3, title: "Limpiar la cocina", completed: 0, todoId: 2, userId: 1 },
];

// Obtener todos los "todos" de un usuario
router.get("/users/:id/todos", (req, res) => {
  const userId = parseInt(req.params.id);
  const userTodos = todos.filter((todo) => todo.userId === userId);

  if (userTodos.length === 0) {
    return res
      .status(404)
      .json({ message: "No hay listas de tareas para este usuario" });
  }

  res.json(userTodos);
});

// Obtener un "todo" con sus tareas
router.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));

  if (!todo) {
    return res.status(404).json({ message: "Lista de tareas no encontrada" });
  }

  // Obtener las tareas de ese todo
  const todoTasks = tasks.filter((task) => task.todoId === todo.id);
  res.json({ ...todo, tasks: todoTasks });
});

// Agregar una nueva tarea a un "todo"
router.post("/todos/:id/task", (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, completed } = req.body;

  // Verificar si el ToDo existe
  const todo = todos.find((t) => t.id === todoId);
  if (!todo) {
    return res.status(404).json({ message: "Lista de tareas no encontrada" });
  }

  if (!title) {
    return res
      .status(400)
      .json({ message: "El título de la tarea es obligatorio" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: completed ?? 0, // Si no se envía, se asume incompleto (0)
    todoId,
    userId: todo.userId,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
