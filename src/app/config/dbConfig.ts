import mongoose from "mongoose";

export function connectDB() {
    try {
        mongoose.connect(process.env.mongo_url!)

        const connection = mongoose.connection;


        // Test the connection string
        connection.on("connected", () => {
            console.log("MongoDB Connection Successful")
        })

        connection.on("error", (error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }
}