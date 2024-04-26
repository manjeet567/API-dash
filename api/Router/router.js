const router=require('express').Router()
const {uploadMiddleware,uploadMiddlewaree}=require('../midalware/multer')
const memberc=require('../controllers/members')
const empc=require('../controllers/employee')
const walletc=require('../controllers/wallet')

router.post('/emplogin',empc.emplogin)
router.post('/memberregistraion',uploadMiddleware,memberc.members_reg)
router.post('/empreg',uploadMiddlewaree,empc.empreg)
router.get('/userlist',memberc.users)
router.get('/update_user_status',memberc.update_user_status)
router.get('/employee_list',empc.emplist)
router.get('/memberdetails',memberc.memberDetails)
router.post('/member_update',memberc.memberUpdadte)
router.get('/profile',empc.profile)
router.post('/profile_update',uploadMiddlewaree,empc.profile_update)
router.post('/changepass',empc.changepass)
router.get('/get_users_wallet',walletc.get_users_wallet)





module.exports=router;