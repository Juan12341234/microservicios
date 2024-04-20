const Client = [
    { "id": 1, "nombre": "Juan", "apellido": "Tombé", "email": "juan@gmail.com", "password": "juan2005J" },
    { "id": 2, "nombre": "Maria", "apellido": "Alvares", "email": "maria@gmail.com", "password": "maria2005J" },
    { "id": 3, "nombre": "Maicol", "apellido": "Henao", "email": "maicol@gmail.com", "password": "maicol2005J" },
    { "id": 4, "nombre": "Luis", "apellido": "Gaviria", "email": "luis@gmail.com", "password": "luis2005J" },
    { "id": 5, "nombre": "Francisco", "apellido": "Patiño", "email": "francisco@gmail.com", "password": "francisco2005J" }
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
    const data = Client[id];
    if (!data) {
        res.json({ message: "Error: No existe ese cliente" });
    }
    else {
        res.json(data);
    }
};

clients.editar = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    if (data != null) {
        Client[id].nombre = data.nombre;
        Client[id].apellido = data.apellido;
        Client[id].email = data.email;
        Client[id].password = data.password;
        res.json(Client[id]);
    } else {
        res.json({ message: "Error: Tratando de actualizar datos..." });
    }
};

clients.eliminar = (req, res) => {
    const { id } = req.params;
    Client.splice(id, 1);
    if(!Client[id]){
        res.json({message: "Eliminado correctamente"});
    }else{
        res.json({ message: "Error: Tratando de eliminar datos..." });
    }
};

module.exports = clients;