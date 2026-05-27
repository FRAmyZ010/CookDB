const multer = require('multer');
const express = require("express");
const router = express.Router();

const fileStorageEngine = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null,'../frontend/public/img' )
  },
  filename:(req, file, cb)=>{
    cb(null, Date.now()+"--"+file.originalname)
  }
})

const upload = multer({storage:fileStorageEngine});

router.post('/',upload.single('image'),(req,res)=>{
    console.log(req.file);
    res.send("Single File upload success!")
})

module.exports = router;