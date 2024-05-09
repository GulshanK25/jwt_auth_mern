import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        const connection = await mongoose.connect(process.env.Connection_string);
        console.log("database connected",connection.connection.host,connection.connection.name);
    }
    catch (err) {
        console.log(err);
        process.exit(1);

    }
}