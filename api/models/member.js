module.exports=(sequelize, Sequelize)=>{
    const Members=sequelize.define("Members",{
        "companyType":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "companyName":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "ownerName":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "ownerAadharNumber":{
            type:Sequelize.BIGINT,
            allowNull: false,
        },
        "ownerPanNumber":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "CinNumber":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "companyPanNumber":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "gstNumber":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "owneradd":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "companyadd":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "bankAcNumber":{
            type:Sequelize.BIGINT,
            allowNull: false,
        },
        "accountHolderName":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "bankName":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "ifscCode":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "acType":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "aadharFrontImg":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "aadharBackImg":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "ownerPanImg":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "ownerimg":{
            type:Sequelize.BIGINT,
            allowNull: false,
        },
        "signatureimg":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "companyPan":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "gstImage":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "cinImage":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "paySlip":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "mobile":{
            type:Sequelize.BIGINT,
            allowNull: false,
            unique:true
        },
        "domain":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "ip":{
            type:Sequelize.STRING,
            allowNull: false,
        },
        "email":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "contrycode":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "memberid":{
            type:Sequelize.STRING,
            allowNull: false,
            unique:true
        },
        "password":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "api_key":{
            type:Sequelize.STRING,
            allowNull: false,
            unique:true
        },
        "service_data":{
            type:Sequelize.STRING,
            allowNull: false
        },
        "accountstatus":{
            type:Sequelize.STRING,
            allowNull: false,
            default:'Pending'
        }
    });
    return Members
}