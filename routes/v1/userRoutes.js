const express = require('express')
const {
    randomUser,
    allUsers,
    saveUser,
    updateUser,
    deleteUser
} = require('../../controllers/usersController')
const router = express.Router()

router.route('/random').get(randomUser)
router.route('/all').get(allUsers)
router.route('/save').post(saveUser)
router.route('/update/:id').patch(updateUser)
router.route('/delete/:id').delete(deleteUser)

module.exports = router