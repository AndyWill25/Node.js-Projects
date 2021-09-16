if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()

app.use(express.static('Public'))

const PORT = process.env.PORT || 3000

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))



app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})