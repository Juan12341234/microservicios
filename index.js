const express = require('express');
const app = express();
const port = 3000;

// Requerir la Route
const routeClient = require('./Routes/clienteRoute');

// Utilizar formato JSON en las request
app.use(express.json());

// Utilizar formularios en las request
app.use(express.urlencoded({extended: true}));

app.use('/api', routeClient);

app.get('/', (req, res) => {
    res.send("Bienvenido al microservicio Cliente.");
});

app.listen(port, () => {
    console.log(`Client server is running on port ${port}`);
});