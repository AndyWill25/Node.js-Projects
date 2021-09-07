const express = require('express')
const app = express()

app.use(express.static('Public'))

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('I am ROOT')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})