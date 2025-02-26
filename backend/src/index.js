const express = require('express')
const mongoose = require('mongoose')
const exampleRoutes = require('./routes/exampleRoutes')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/examples', exampleRoutes)

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch(err => console.error(err))