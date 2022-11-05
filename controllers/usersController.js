const Users = require("../utils/Users")

/**
 * It takes a request and a response, and sends a random user from the Users array.
 * @param req - request
 * @param res - The response object.
 */
const randomUser = async (req, res) => {
    const random = Users[Math.floor(Math.random() * Users.length)]
    res.send(random)
}

module.exports = {
    randomUser,
}