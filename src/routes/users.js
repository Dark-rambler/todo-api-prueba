const express = require('express');
const router = express.Router();

let users = [
    { id: 1, firstName: "Daniel", lastName: "Calvo", email: "dcalvo@polpocr.com" },
    { id: 2, firstName: "Katherine", lastName: "Calvo", email: "kcalvo@polpocr.com" }
];

// Obtener todos los usuarios
router.get('/', (req, res) => {
    res.json(users);
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { firstName, lastName, email } = req.body;
    console.log(req.body);
    if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;
