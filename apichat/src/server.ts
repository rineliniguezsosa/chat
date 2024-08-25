import express from 'express';
import * as dotenv from 'dotenv'
import { Connectdb } from './config/connectdb';
import { userRouter } from './routes';
import cors from 'cors';

dotenv.config()

const app = express()
app.use(cors({
    origin:process.env.ORIGIN
}))
app.use(express.json())
app.use('/user',userRouter)

Connectdb()


app.listen(process.env.PORTSERVER,()=>{
    console.log(`Server running in the port ${process.env.PORTSERVER}`);
})