const multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = './public/upload';
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });
  
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 2 }
  }).fields([
    { name: 'ownerimg', maxCount: 1 },
    { name: 'sign', maxCount: 1 },
    { name: 'gstimage', maxCount: 1 },
    { name: 'cinimg', maxCount: 1 },
    { name: 'payslip', maxCount: 1 },
    { name: 'abimg', maxCount: 1 },
    { name: 'afimg', maxCount: 1 },
    { name: 'cpanimg', maxCount: 1 },
    { name: 'opanimg', maxCount: 1 }
  ]);
  
  exports.uploadMiddleware = (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        // Handle Multer errors
        if (err instanceof multer.MulterError) {
          console.log(err)
          if (err.code === 'LIMIT_FILE_SIZE') {
            console.log(err)
            return res.status(400).json({ error: 'File size is too large. Max size is 2MB.' });
          }
          return res.status(500).json({ error: 'Internal server error' });
        } else if (err) {
          // Handle other non-Multer errors
          return res.status(500).json({ error: 'Internal server error' });
        }
      }
  
      // Files upload successful, continue with the next middleware or route handler
      next();
    });
  };

  const uploads = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 2 }
  }).fields([
    { name: 'file', maxCount: 1 }
  ]);

 exports.uploadMiddlewaree = (req, res, next) => {
    uploads(req, res, function (err) {

      if (err) {
        // Handle Multer errors
        if (err instanceof multer.MulterError) {
          console.log(err)
          if (err.code === 'LIMIT_FILE_SIZE') {
            console.log(err)
            return res.status(400).json({ error: 'File size is too large. Max size is 2MB.' });
          }
          return res.status(500).json({ error: 'Internal server error' });
        } else if (err) {
          // Handle other non-Multer errors
          return res.status(500).json({ error: 'Internal server error' });
        }
      }
  
      // Files upload successful, continue with the next middleware or route handler
      next();
    });
  };

  // module.exports=uploadMiddlewaree;
  // module.exports=uploadMiddleware;