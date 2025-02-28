// Importamos el paquete express
const express = require('express');
const path = require('path');

// Inicializamos la aplicación express
const app = express();

// Definimos el puerto en el que se ejecutará el servidor
const PORT = 3000;

// Servimos archivos estáticos (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de prueba para asegurarnos que el servidor está funcionando
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
