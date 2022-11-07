const express = require('express')
const {
    randomUser,
    allUsers,
    saveUser,
    updateUser
} = require('../../controllers/usersController')
const router = express.Router()

router.route('/random').get(randomUser)
router.route('/all').get(allUsers)
router.route('/save').post(saveUser)
router.route('/update/:id').patch(updateUser)

module.exports = router