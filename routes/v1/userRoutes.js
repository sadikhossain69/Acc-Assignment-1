const express = require('express')
const { randomUser } = require('../../controllers/usersController')
const router = express.Router()

router.route('/random').get(randomUser)

module.exports = router