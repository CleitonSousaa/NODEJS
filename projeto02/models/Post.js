const db = require('./Db')

const Post = db.sequelize.define('postagens',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    }

})

//Post.sync({force: true})

module.exports = Post;