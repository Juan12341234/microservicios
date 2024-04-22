const Client = [
    { "id": "1", "nombre": "Juan", "apellido": "Tombé", "email": "juan@gmail.com", "password": "juan2005J" },
    { "id": "2", "nombre": "Maria", "apellido": "Alvares", "email": "maria@gmail.com", "password": "maria2005J" },
    { "id": "3", "nombre": "Maicol", "apellido": "Henao", "email": "maicol@gmail.com", "password": "maicol2005J" },
    { "id": "4", "nombre": "Luis", "apellido": "Gaviria", "email": "luis@gmail.com", "password": "luis2005J" },
    { "id": "5", "nombre": "Francisco", "apellido": "Patiño", "email": "francisco@gmail.com", "password": "francisco2005J" }
];

const clients = {};

clients.obtener = (req, res) => {
    res.json(Client);
};

clients.crear = (req, res) => {
    const newClient = req.body;
    if (newClient != null) {
        Client.push(newClient);
        res.json(Client);
    } else {
        res.json({ message: "Error: Ingresa datos" });
    }

};

clients.buscar = (req, res) => {
    const { id } = req.params;
    const data = Client.find(c => c.id === id);
    if (!data) {
        res.json({ message: "Error: No existe ese cliente" });
    } else {
        res.json(data);
    }
};

clients.editar = (req, res) => {
    const { id } = req.params;
    const datosEntrada = req.body;
    const data = Client.find(c => c.id === id);
    if (datosEntrada != null) {
        data.nombre = datosEntrada.nombre;
        data.apellido = datosEntrada.apellido;
        data.email = datosEntrada.email;
        data.password = datosEntrada.password;
        res.json(data);
    } else {
        res.json({ message: "Error: Tratando de actualizar datos..." });
    }
};

clients.eliminar = (req, res) => {
    function eliminarCliente(index) {
        if (index !== -1) {
            Client.splice(index, 1);
            res.json({ message: "Eliminado exitosamente" });
        } else {
            res.json({ message: "Error: Tratando eliminar..." })
        }
    }
    const { id } = req.params;
    const index = Client.findIndex(c => c.id === id);

    eliminarCliente(index);
};

module.exports = clients;