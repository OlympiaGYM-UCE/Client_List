const ClienteRepository = require('../repositories/ClienteRepository');
const ClienteService = {
    getAllClientes: async () => await ClienteRepository.findAll(),
    getClienteById: async (id) => await ClienteRepository.findById(id),
    createCliente: async (data) => await ClienteRepository.create(data),
    updateCliente: async (id, data) => await ClienteRepository.update(id, data),
    deleteCliente: async (id) => await ClienteRepository.delete(id)
};
module.exports = ClienteService;