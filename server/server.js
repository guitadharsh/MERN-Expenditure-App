import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(cors);

mongoose.connect("mongodb+srv://guitadharsh:guitadharsh@cluster1.nujfv.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("database connected succesfully")})
.catch((err)=> {console.log(err)})


app.get('/', (req, res) => {
    console.log("Hello World")
})


app.listen(8000, ()=>{console.log('server is running')})