import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import productsRoutes from './routes/products.js'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())


const CONNECTION_URL = 'mongodb+srv://arkadiusz:arkadiusz@cluster0.3unu5qt.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>app.listen(port, ()=> console.log(`server running on port ${port}`)))
    .catch((error)=> console.log(error.message))


app.get('/', (request,response) =>{
    response.send('Homepage')
})
app.use('/products', productsRoutes)