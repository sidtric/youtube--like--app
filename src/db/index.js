import mongoose from "mongoose";
import { DB_NAME } from "../constants/index.js";

const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        console.log('\n mongo db connected')
        console.log(connection)
        

    }catch(err){
        console.log('mongo connection error', err);
        process.exit()
    }
}

export default connectDB