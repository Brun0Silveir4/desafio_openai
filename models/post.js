const db = require("./banco")

const Comercio = db.sequelize.define("comercio",{
    nome:{
        type: db.Sequelize.STRING
    },
    marca:{
        type: db.Sequelize.STRING
    },
    modelo:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.TEXT
    },
    palavras_chave:{
        type: db.Sequelize.TEXT
    }
})

Comercio.sync({force: true})

module.exports = Comercio