const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'REST_API','root','root',
    {
        host : 'localhost',
        dialect : 'mariadb'
    }
)

sequelize.authenticate().then(()=>{
    console.log("Database connected successfully")
}).catch((err)=>{
    console.log("Error while connceting Database: ",err);
})

module.exports = sequelize;