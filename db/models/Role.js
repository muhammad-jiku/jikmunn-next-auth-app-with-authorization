const mongoose = require('mongoose');
const roleSchema = require('../schemas/roleSchema');

const Role = mongoose.models.Role || new mongoose.model('Role', roleSchema);

module.exports = Role;
