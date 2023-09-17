import express from 'express';
import {PORT, mongoDB_URL} from './config.js'
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js'
import bookStoreRoutes from './routes/bookstoreRoutes.js'
import cors from 'cors'
const app = express();
//to parse json
app.use(express.json());

//CORS error
//Allows all urls
app.use(cors())
//Allows specific
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'PUT', 'POST', 'DELETE'],
//         allowedHeaders: ["Content-Type"],
//     })
// )

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("Welcome to MERN app")
})

app.use('/books', bookStoreRoutes)

//connection to our database
mongoose.connect(mongoDB_URL).then(()=>{
    console.log("App is connexted to DB")
    app.listen(PORT, ()=>{
        console.log(`App is running on ${PORT}`)
    })

}).catch((error)=>{
    console.log(error)
})