import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB is Connected");
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "e-commerce",
    });
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};

export default connectDB;
