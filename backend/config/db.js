import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_URI = process.env.DATABASE_URI;
export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

// module.exports = connectDB;
