require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const todoRoutes = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/', todoRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
