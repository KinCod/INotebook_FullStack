//initially using routes imported from express

const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{

    res.json([]);          //converted into json
})

module.exports = router;