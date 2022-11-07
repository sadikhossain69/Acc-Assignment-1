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


/**
 * It takes the id of the user from the request params, the data to be updated from the request body,
 * finds the user with the id from the request params, and updates the user with the data from the
 * request body.
 * @param req - request
 * @param res - the response object
 */
const updateUser = async (req, res) => {
    const { id } = req.params;
    const insertedData = req.body
    const updatedData = Users.find(user => user.id === Number(id))

    if (insertedData.name) {
        updatedData.name = insertedData.name
    }

    if (insertedData.gender) {
        updatedData.gender = insertedData.gender
    }

    if (insertedData.contact) {
        updatedData.contact = insertedData.contact
    }

    if (insertedData.address) {
        updatedData.address = insertedData.address
    }

    if (insertedData.photoUrl) {
        updatedData.photoUrl = insertedData.photoUrl
    }

    res.send(updatedData)
}

module.exports = {
    randomUser,
    allUsers,
    saveUser,
    updateUser,
} 