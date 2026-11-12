const  Usuario  = require('./Usuario')
const  Suco  = require('./Suco')

Usuario.hasMany(Suco,{
    foreignKey: 'codUsuario',
    as:'sucoUsuario',
    onDelete: 'CASCADE'
})

Suco.belongsTo(Usuario,{
    foreignKey: 'codUsuario',
    as: 'usuarioSuco',
    allowNull: false
})

module.exports = {Usuario, Suco}