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

/**
 * It takes a request and a response, and sends a response with a limited number of users.
 * @param req - request
 * @param res - The response object.
 */
const allUsers = async (req, res) => {
    console.log(Users.length);
    if (req.query === "limit") {
        const { limit } = req.query
        const limitedUser = Users.slice(0, limit)
        res.send(limitedUser)
    }
    res.send(Users)
}

/**
 * It takes the request body, and if it doesn't have all the required fields, it sends a message to the
 * user. Otherwise, it adds the user to the Users array and sends a success message.
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const saveUser = async (req, res) => {
    const userInfo = req.body
    console.log(userInfo)
    if (!userInfo.id || !userInfo.gender || !userInfo.name || !userInfo.contact || !userInfo.address || !userInfo.photoUrl) {
        res.send("Please fill all the info")
    }
    Users.push(userInfo)
    res.send("User post Successfully")
}

module.exports = {
    randomUser,
    allUsers,
    saveUser,
} 