import express from 'express'
import cors from 'cors'
import { connectDb } from './config/mongoDbConnection.js';

const app = express();
app.use(express.json());
app.use(cors());

//connecting to mongo database
connectDb();

//Starting the server
const PORT = process.env.PORT || 9090 ;
app.listen(PORT,(error)=>{
    error 
    ? console.log(error)
    :console.log('server started at '+ PORT);
})

app.get("/",(req,res)=>{
    res.json("server started")
}
)