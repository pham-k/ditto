const express = require('express')
const app = express()
const port = 3000
const classRouter = require('./class/class-router')
const studentRouter = require('./student/student-router')


app.use(express.json());

app.use('/api/v1/class', classRouter)
app.use('/api/v1/student', studentRouter)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})