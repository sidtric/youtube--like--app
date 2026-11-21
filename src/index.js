

import connectDB from "./db/index.js";
import dotenv from"dotenv";
import app from './app.js'



dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 4000, ()=>{console.log(`server running at PORT ${process.env.PORT|| 4000}`)
    })
})
.catch((err)=>{console.log("mongo db connection failed", err);
})
