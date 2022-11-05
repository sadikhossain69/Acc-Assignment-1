const express = require('express')
const { randomUser, allUsers } = require('../../controllers/usersController')
const router = express.Router()

router.route('/random').get(randomUser)
router.route('/all').get(allUsers)

module.exports = router