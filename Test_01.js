// console.log("Testing");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('hello world')

    
})
app.get('/Home',  (req, res) => {
    res.send('Welcome Home Page')
})
app.get('/Contact',  (req, res) => {
    res.send("My Number is 8976546789")
})

app.listen(process.env.PORT, () => {
    console.log(`${port}`)

})