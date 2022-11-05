const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000 || process.env.PORT
const userRouter = require('./routes/v1/userRoutes')

// Middlewares 
app.use(cors())
app.use(express.json())

// Api End Point
app.use('/api/v1/user', userRouter)

app.all('*', (req, res) => {
    res.send("Server is Not Responding")
})


app.listen(PORT, () => {
    console.log(`Website Running at PORT ${PORT}`)
})