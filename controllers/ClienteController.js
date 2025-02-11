const ClienteService = require('../services/ClienteService');
const ClienteController = {
    getAllClientes: async (req, res) => {
        const clientes = await ClienteService.getAllClientes();
        res.json(clientes);
    },
    getClienteById: async (req, res) => {
        const cliente = await ClienteService.getClienteById(req.params.id);
        if (cliente) res.json(cliente);
        else res.status(404).json({ error: 'Cliente no encontrado' });
    },
    createCliente: async (req, res) => {
        const nuevoCliente = await ClienteService.createCliente(req.body);
        res.status(201).json(nuevoCliente);
    },
    updateCliente: async (req, res) => {
        await ClienteService.updateCliente(req.params.id, req.body);
        res.json({ mensaje: 'Cliente actualizado' });
    },
    deleteCliente: async (req, res) => {
        await ClienteService.deleteCliente(req.params.id);
        res.json({ mensaje: 'Cliente eliminado' });
    }
};
module.exports = ClienteController;