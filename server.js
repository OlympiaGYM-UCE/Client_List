const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models'); 
const clienteRoutes = require('./routes/cliente.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/clientes', clienteRoutes);

sequelize.sync()
    .then(() => {
        console.log('Conexión a la base de datos establecida.');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(error => console.log('Error al conectar con la base de datos:', error));
