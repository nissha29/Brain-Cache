import mongoose from "mongoose"

export default async function connectDB(){
    try{
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("MONGO_URI environment variable is not defined.");
        }
        await mongoose.connect(mongoURI);
        console.log(`Database connnected successfully, ${mongoose.connection.host}`);
    }catch(err){
        console.log(`error while connecting to the database: ${err}`);
    }
}