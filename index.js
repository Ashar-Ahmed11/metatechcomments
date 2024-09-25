
const express = require('express')
const connectToMongo = require('./db/connectmongo')
connectToMongo()
const app = express()
const port = process.env.PORT || 4000

var cors = require('cors')
app.use(express.json())
app.use(cors())



// app.use('/api/v1/auth',require('./routes/comment'))
// app.use('/api/v1/room',require('./routes/room'))
// app.use('/api/v1/message',require('./routes/message'))
app.use('/api/v1/comment',require('./routes/comment'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})