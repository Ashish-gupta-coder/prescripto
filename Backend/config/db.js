import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        console.log(process.env.MONGODB_URL)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is connected")
    } catch (error) {
        console.log(`Database error ${error}`)
    }
}

export default connectDb