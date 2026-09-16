import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB is Connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};

export default connectDB;
