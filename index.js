const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  //res.send('Server is online!')
 
})

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`)
})