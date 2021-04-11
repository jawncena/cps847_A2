const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')


app.get('/', async(req, res) => {
  res.sendFile(__dirname + '/index.html');
  //res.send('Server is online!')
 
})

app.listen(port,async () => {
  //console.log(`Server is live at http://localhost:${port}`)
})

function sum(a, b) {
  return a + b;
}
module.exports = sum;