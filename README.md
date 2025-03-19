# To-Do List API

## 📌 Descripción
Esta API permite gestionar usuarios, listas de tareas (**ToDos**) y tareas individuales (**Tasks**) siguiendo los principios de REST. Es un reto técnico desarrollado con **Node.js y Express**.

## 🚀 Instalación y ejecución
### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/tu-usuario/todo-api.git
cd todo-api
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y agrega:
```
PORT=5000
```

### 4️⃣ Iniciar el servidor
```sh
node src/index.js
```
El servidor estará corriendo en `http://localhost:5000`.

---

## 📌 Endpoints

### 📌 **Usuarios**
#### 🔹 Obtener todos los usuarios
```http
GET /users
```
**Respuesta:**
```json
[
  { "id": 1, "firstName": "Daniel", "lastName": "Calvo", "email": "dcalvo@polpocr.com" },
  { "id": 2, "firstName": "Katherine", "lastName": "Calvo", "email": "kcalvo@polpocr.com" }
]
```

#### 🔹 Obtener un usuario por ID
```http
GET /users/:id
```
**Ejemplo:** `GET /users/1`

**Respuesta:**
```json
{ "id": 1, "firstName": "Daniel", "lastName": "Calvo", "email": "dcalvo@polpocr.com" }
```

#### 🔹 Crear un usuario
```http
POST /users
```
**Body (JSON):**
```json
{ "firstName": "Diana", "lastName": "Mejía", "email": "dmejia@polpocr.com" }
```
**Respuesta:**
```json
{ "id": 3, "firstName": "Diana", "lastName": "Mejía", "email": "dmejia@polpocr.com" }
```

---

### 📌 **ToDos (Listas de tareas)**
#### 🔹 Obtener todas las listas de un usuario
```http
GET /users/:id/todos
```
**Ejemplo:** `GET /users/1/todos`

**Respuesta:**
```json
[
  { "id": 1, "title": "Universidad", "keywords": ["estudios", "importante", "academia"], "userId": 1 },
  { "id": 2, "title": "Casa", "keywords": ["oficio", "necesario", "orden"], "userId": 1 }
]
```

#### 🔹 Obtener un ToDo con sus tareas
```http
GET /todos/:id
```
**Ejemplo:** `GET /todos/1`

**Respuesta:**
```json
{
  "id": 1,
  "title": "Universidad",
  "keywords": ["estudios", "importante", "academia"],
  "userId": 1,
  "tasks": [
    { "id": 1, "title": "Estudiar para el examen", "completed": 0, "todoId": 1, "userId": 1 },
    { "id": 2, "title": "Ir a clases", "completed": 1, "todoId": 1, "userId": 1 }
  ]
}
```

---

### 📌 **Tareas (Tasks)**
#### 🔹 Agregar una tarea a un ToDo
```http
POST /todos/:id/task
```
**Body (JSON):**
```json
{ "title": "Hacer ejercicio", "completed": 0 }
```
**Respuesta:**
```json
{ "id": 3, "title": "Hacer ejercicio", "completed": 0, "todoId": 1, "userId": 1 }
```

---

## 🛠️ Tecnologías usadas
- **Node.js** + **Express.js**
- **CORS** para permitir peticiones externas
- **dotenv** para manejar variables de entorno

## 📄 Estructura del proyecto
```
todo-api/
│── src/
│   ├── routes/
│   │   ├── users.js
│   │   ├── todos.js
│   ├── controllers/
│   │   ├── usersController.js
│   │   ├── todosController.js
│   ├── data/
│   │   ├── db.js  (simulación de base de datos)
│   ├── index.js
│── .env
│── package.json
```
