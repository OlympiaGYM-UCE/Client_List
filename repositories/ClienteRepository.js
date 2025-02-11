const Cliente = require('../models/Cliente');
const ClienteRepository = {
    findAll: async () => await Cliente.findAll(),
    findById: async (id) => await Cliente.findByPk(id),
    create: async (data) => await Cliente.create(data),
    update: async (id, data) => await Cliente.update(data, { where: { id } }),
    delete: async (id) => await Cliente.destroy({ where: { id } })
};
module.exports = ClienteRepository;