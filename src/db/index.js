import mongoose from "mongoose";


const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect(`${process.env.DATABASE_URI}`)
        console.log('\n mongo db connected')
       
        

    }catch(err){
        console.log('mongo connection error', err);
        process.exit()
    }
}

export default connectDB