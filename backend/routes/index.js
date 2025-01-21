const express = require('express')
const router = express.Router()

const userRoute = require('./UserRoute')
const mainRoute = require('./MainRoute')

router.use('/user', userRoute)
router.use('/', mainRoute)

module.exports = router