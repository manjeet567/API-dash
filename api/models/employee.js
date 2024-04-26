module.exports=(sequelize, Sequelize)=>{
    const empsignin=sequelize.define("Employees",{
        "empname":{
            type:Sequelize.STRING
        },
        "mobile":{
            type:Sequelize.BIGINT,
            allowNull: false,
            unique:true
        },
        "email":{
            type:Sequelize.STRING,
            allowNull: false,
            unique:true
        },
        "dept":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "designation":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "empid":{
            type:Sequelize.INTEGER,
            allowNull: false,
            unique:true
        },
        "password":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "img":{
            type:Sequelize.STRING,
            allowNull: false,
        }
    });
    return empsignin
}