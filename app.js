const express = require('express');
const sequelize = require('./config/database');
const clienteRoutes = require('./routes/ClienteRoutes');
const app = express();
app.use(express.json());
app.use('/api', clienteRoutes);
sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
}).catch(error => console.error('Error al conectar con la base de datos:', error));