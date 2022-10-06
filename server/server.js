import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import TransactionRouter from './api/Transaction.js'
import connect from './mongoDB/config.js'

const app = express()
// mongodb connection
 connect()

// middlewares
app.use(cors());
app.use(bodyParser.json())

// routers
app.get('/', (req, res) => {
    console.log('initial request')
})

app.use('/transaction', TransactionRouter)


app.listen(8000, ()=>{console.log('server is running')})