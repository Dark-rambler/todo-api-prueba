const { users } = require('../data/db');

const getUsers = (req, res) => {
    res.json(users);
};

const getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
};

const createUser = (req, res) => {
    const { firstName, lastName, email } = req.body;
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
};

module.exports = { getUsers, getUserById, createUser };
