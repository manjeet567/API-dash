const db = require('../models')
const Op = db.sequelize.op;
const sequelize = db.sequelize
const employee = db.employee
require('dotenv').config()
const nodemailer = require('nodemailer')
const message = require('../helpers/message')

exports.empreg = async (req, res) => {
    try {
        const { empname, email, dept, mobile, designation, } = req.body
        const checkuser = await sequelize.query(`select * from Employees where mobile=${mobile} or email='${email}'`)
        if (checkuser[0].length) {
            return res.json({
                status: message.code400,
                message: message.messageexist
            })
        }
        const filename = req.files.file.map(obj => obj.filename).toString()
        function gpass() {
            const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            let pass = '';
            for (let i = 0; i < 10; i++) {
                pass += Math.floor(Math.random() * 100000);
                pass += char.charAt(Math.floor(Math.random() * char.length));
                return pass
            }
        }
        const randompass = gpass()
        let employeeid = 'API'
        let num = 1101
        const promise = new Promise(async function (resolve, reject) {
            const result = await sequelize.query('SELECT top 1 * FROM Employees order by id desc');
            const aa = result[0]
            console.log(aa)
            if (aa.length) {
                const id = aa[0].empID.slice(3)
                const idd = Number(id) + 1
                employeeid = employeeid + idd
            } else {
                employeeid = 'API1101';
            }
            resolve()
        }).then(async () => {
            await sequelize.query(`
            INSERT INTO Employees (
              empname, dept, mobile, designation,
              img, email, empID, password
            ) VALUES (
              '${empname}', '${dept}', '${mobile}', '${designation}',
              '${filename}','${email}', '${employeeid}', '${randompass}'
            );
          `);
            res.json({
                status: message.code201,
                message: message.message201
            })
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            status: message.code500,
            message: message.message500
        })
    }
}

exports.emplist = async (req, res) => {
    try {
        const data = await sequelize.query(`select * from Employees order by id desc`)
        res.json({
            status: message.code200,
            message: message.message200,
            apiData: data[0]
        })
    } catch (error) {
        res.json({
            status: message.code500,
            message: message.message500
        })
    }
}

exports.emplogin = async (req, res) => {
    try {
        console.log(req.body)
        const { userName, passowrd } = req.body
        const query = `
          SELECT *
          FROM Employees 
          WHERE empID='${userName}'
        `;
        const result = await sequelize.query(query);
        const record = result[0]
        if (record.length) {
            const Password = record[0].password
            if (passowrd == Password) {
                res.json({
                    status: message.code200,
                    message: message.message200,
                    apiData: record
                })
            } else {
                res.json({
                    status: message.code400,
                    message: message.message400
                })
            }
        } else {
            res.json({
                status: message.code400,
                message: message.message400
            })
        }
    } catch (error) {
        console.log('emplogin error:', error.message)
        res.json({
            status: message.code500,
            message: message.message500
        })
    }
}

exports.profile = async (req, res) => {
    try {
        const { id } = req.query
        const data = await sequelize.query(`select empname,dept,img,email,mobile,designation,id,empID from Employees where empID='${id}'`)
        res.json({
            status: message.code200,
            message: message.message200,
            apiData: data[0][0]
        })
    } catch (error) {
        console.log('profile error:', error.message)
        res.json({
            status: message.code500,
            message: message.message500
        })
    }
}

exports.profile_update=async(req,res)=>{
    try {
        console.log(req.body)
        console.log(req.files)
        const {id}=req.query
        const{empname,email,dept,mobile,designation}=req.body
        if(req.files.file){
            const filename = req.files.file.map(obj => obj.filename).toString()
            await sequelize.query(` UPDATE Employees SET empname='${empname}',dept='${dept}',mobile='${mobile}',email='${email}',designation='${designation}' ,img='${filename}'
            WHERE empID='${id}'`)
        }else{
            await sequelize.query(` UPDATE Employees SET empname='${empname}',dept='${dept}',mobile='${mobile}',email='${email}',designation='${designation}'
            WHERE empID='${id}'`)
        }
        res.json({
            status:message.code200,
            message:message.messageupdate
        })
    } catch (error) {
        console.log('profile_update:', error.message)
        res.json({
            status: message.code500,
            message: message.message500
        })
    }
}

exports.changepass=async(req,res)=>{
    try {
        console.log(req.body,req.query)
        const{id}=req.query
        const{cpass,npass,cnpass}=req.body

        const Query = `
        SELECT * 
        FROM Employees 
        WHERE empID='${id}'
      `;
      const Result = await sequelize.query(Query);
      const record=Result[0]
      const pass=record[0].password

      //console.log(pass,Result,record)
      if(pass==cpass){
        const query = `
        UPDATE Employees SET password='${npass}' WHERE empID='${id}';
      `;
      const result = await sequelize.query(query);
      res.json({
        status:message.code201,
        message:'Password Update Successfully'
      })
      }else{
        res.json({
            status:message.code400,
            message:'Current Password Incorrect'
          })
    }
    } catch (error) {
        console.log('changepass:', error.message)
        res.json({
            status: message.code500,
            message: message.message500
        })
    }
}