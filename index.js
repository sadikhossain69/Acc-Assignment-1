const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000 || process.env.PORT

// Middlewares 
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Website Running at PORT ${PORT}`)
})