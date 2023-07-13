import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "work_tracker",
    });
    console.log("DB Connected");
    console.log("DB Connected on host", connection.host);
  } catch (error) {
    console.log("Error in connectDB function", error);
  }
};
