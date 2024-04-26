const db = require('../models')
const Op = db.sequelize.op;
const sequelize = db.sequelize
const employee = db.employee
require('dotenv').config()
const nodemailer = require('nodemailer')
const message = require('../helpers/message')


exports.members_reg = async (req, res) => {
    try {
        const { ctype, owneraadharn, cpann, companyadd, service, companyname, ownerpann, accountholdername, gstn, acnumber, ifsccode, ownername, cinnumber, bankname, owneradd, actype, mobile, domain, ip, email, contrycode } = req.body
        const checkUser = await sequelize.query(`select * from  Members where mobile=${mobile}`)
        if (checkUser[0].length) {
            return res.json({
                status: message.code400,
                message: message.messageexist
            })
        }
        const files = req.files
        const ownerpanimg = files.opanimg.map(obj => obj.filename).toString()
        const gstimage = files.gstimage.map(obj => obj.filename).toString()
        const aadharfrontimg = files.afimg.map(obj => obj.filename).toString()
        const cpanimg = files.cpanimg.map(obj => obj.filename).toString()
        const cinimg = files.cinimg.map(obj => obj.filename).toString()
        const aadharbackimg = files.abimg.map(obj => obj.filename).toString()
        const payslipimg = files.payslip.map(obj => obj.filename).toString()
        const ownerimg = files.ownerimg.map(obj => obj.filename).toString()
        const sign = files.sign.map(obj => obj.filename).toString()

        let Memberid = "APIS"
        Memberid = Memberid + Math.floor(Math.random() * 1000000)

        const randompass = gpass()

        await sequelize.query(`
        INSERT INTO Members (
          companyType, companyName, ownerName, ownerAadharNumber, ownerPanNumber,
          CinNumber, companyPanNumber, gstNumber, owneradd,
          companyadd, bankAcNumber, accountHolderName, bankName, ifscCode,acType,aadharFrontImg,
          aadharBackImg,ownerPanImg,ownerimg,signatureimg,companyPan,gstImage,cinImage,paySlip,mobile,domain,ip,
          email,contrycode,memberid,password,service_data
        ) VALUES (
          '${ctype}', '${companyname}', '${ownername}', ${owneraadharn}, '${ownerpann}', '${cinnumber}', '${cpann}', '${gstn}',
           '${owneradd}','${companyadd}', ${acnumber},'${accountholdername}', '${bankname}', '${ifsccode}', '${actype}', '${aadharfrontimg}',
            '${aadharbackimg}','${ownerpanimg}', '${ownerimg}', '${sign}','${cpanimg}', '${gstimage}','${cinimg}','${payslipimg}',${mobile},
          '${domain}', '${ip}', '${email}', '${91}', '${Memberid}','${randompass}','${service}'
        );
      `)
        sentMail(email, Memberid, randompass)
        res.json({
            status: message.code201,
            message: message.message201
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            status: message.code500,
            message: message.message500
        })
    }
}

function gpass() {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = '';
    for (let i = 0; i < 10; i++) {
        pass += Math.floor(Math.random() * 100000);
        pass += char.charAt(Math.floor(Math.random() * char.length));
        return pass
    }
}


async function sentMail(email, Memberid, randompass) {
    try {
        let testaccount = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL,
                pass: process.env.pass
            }
        })
        console.log('connected')
        const info = await transporter.sendMail({
            from: 'developinfoatech@gmail.com',
            to: email,
            subject: "API PARTNER INFOTECH PVT LTD",
            text: "",
            html: `<b>You have successfully registred.Your account is pendding yet! username:${Memberid}, password: ${randompass}</b>`,
        })
        console.log('sent')
    } catch (error) {
        console.log(error.message)
    }
}


exports.users=async(req,res)=>{
    try{
     const {status}=req.query
     const result=await sequelize.query(`select mobile,memberid,ownerName,companyName,id,accountstatus from Members where accountstatus='${status}'`)
     const data=result[0]
     res.json({
        status:message.code200,
        message:message.message200,
        apiData:data
     })
    }catch(error){
        console.log(error.message)
        res.json({
            status:message.code500,
            message:message.message500
        })
    }
}

exports.update_user_status=async(req,res)=>{
    console.log(req.query)
    try{
        const{id,status,activestatus}=req.query
        await sequelize.query(`update Members set accountstatus='${status}' where id=${id}`)
        const data=await sequelize.query(`select mobile,memberid,ownerName,companyName,id,accountstatus from Members where accountstatus='${activestatus}'`)
        res.json({
            status:message.code200,
            message:message.messageupdate,
            apiData:data[0]
        })
    }catch(error){
        res.json({
            status:message.code500,
            message:message.message500
        })
    }
}

exports.memberDetails=async(req,res)=>{
    try {
        const{id}=req.query
        const data=await sequelize.query(`select * from Members where id=${id}`)
        res.json({
            status:message.code200,
            message:message.message200,
            apiData:data[0][0]
        })
    } catch (error) {
        console.log('memberDetails error:',error.message)
        res.json({
            status:message.code500,
            message:message.message500
        })
    }
}

exports.memberUpdadte=async(req,res)=>{
    try {
        console.log(req.body)
        const {id}=req.query
        const{ctype,owneraadharn,cpann,companyadd,service,companyname,ownerpann,accountholdername,gstn,acnumber,ifsccode,
            ownername,cinnumber,bankname,owneradd,actype,mobile,domain,ip,email,contrycode}=req.body
        const data=await sequelize.query(` UPDATE Members SET companyType='${ctype}',companyName='${companyname}',ownerName='${ownername}',ownerAadharNumber='${owneraadharn}',
        ownerPanNumber='${ownerpann}' ,gstNumber='${gstn}',owneradd='${owneradd}' ,companyadd='${companyadd}',
        bankAcNumber='${acnumber}' ,accountHolderName='${accountholdername}',bankName='${bankname}' ,ifscCode='${ifsccode}',
        acType='${actype}' ,mobile='${mobile}',domain='${domain}' ,ip='${ip}',email='${email}',contrycode='${contrycode}' 
        ,CinNumber='${cinnumber}',companyPanNumber='${cpann}',service_data='${service}'
        WHERE id='${id}'`)
        res.json({
            status:message.code201,
            message:message.messageupdate,
            apiData:data
        })
    } catch (error) {
        console.log('memberUpdate error:',error.message)
        res.json({
            status:message.code500,
            message:message.message500
        })
    }
}