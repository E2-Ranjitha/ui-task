const db = require('../db/database');
const Sequelize = require('sequelize');

const students = db.define('Students',
{
    FirstName : { type : Sequelize.STRING},
    LastName : { type : Sequelize.STRING},
    Class : { type : Sequelize.INTEGER},
    TotalMArks : { type : Sequelize.INTEGER}
},
    { timestamps: false }
)

db.sync().then(()=>{
    console.log("Table created successfully");
}).catch((err)=>{
    console.log("Error while creating table");
})

module.exports = students;