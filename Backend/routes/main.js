const express = require('express')
const router = express.Router()


router.get('/',  (req, res) => {
    // #swagger.tags = ['Home']
    // #swagger.description = 'Test route'
    res.status(200).json({
        message: 'huh! It works!'
    })
 })

 module.exports = router