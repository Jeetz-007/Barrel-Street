import mongoose from "mongoose"

const connectDB = async () => {
    try{
        const mongoURI = process.env.MONGO_URI;
        await mongoose.connect(mongoURI);
        console.log("Connected to Barrel Street DB.....")
    }
    catch(error){
        console.log("Error in connecting DB ", error.message);
        process.exit(1)
    }
}

export default connectDB;