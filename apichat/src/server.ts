import express from 'express';
import * as dotenv from 'dotenv'
import { Connectdb } from './config/connectdb';


dotenv.config()

const app = express()

Connectdb()


app.listen(process.env.PORT,()=>{
    console.log(`Server running in the port ${process.env.PORT}`);
})