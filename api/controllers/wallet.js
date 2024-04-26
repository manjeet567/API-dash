require('dotenv').config()
const message = require('../helpers/message')



exports.get_users_wallet=async(req,res)=>{
    try {
        const data=await fetch(`${process.env.WALLET_API}`).then(Data=>Data.json()).then((result)=>{
            res.json({
                status:message.code200,
                message:message.message200,
                apiData:result.data
            })
        })
    } catch (error) {
        console.log('get_users_wallet error:',error.message)
        res.json({
            status:message.code500,
            message:message.message500
        })
    }
}