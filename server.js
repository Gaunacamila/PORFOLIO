// Librería Express
const express = require('express');
// Librería File System
const fs = require('fs');

const app = express();

// Configuración de la carpeta para recursos estáticos
app.use(express.static(__dirname + '/public'));

//GET "/" que retorna la página inicial (html.html)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html.html');
});

// Inicio el servidor escuchando en el puerto 3000
app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000... http://localhost:3000");
});
