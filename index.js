require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitData={
  'login':'mohdzaid',
  'id':193234,
  'address':'india'
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
  res.send('<h1>login at chat or code</h1>')
})

app.get('/github',(req,res)=>{
  res.json(gitData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})