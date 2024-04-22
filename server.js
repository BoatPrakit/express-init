const express = require('express')
const app = express();


app.get("/health", (req, res) => {
    res.json({
        status: 200,
        message: "health good"
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

module.exports = app
