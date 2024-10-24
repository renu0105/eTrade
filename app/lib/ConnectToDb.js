import mongoose from "mongoose";
const ConnectToDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    } else {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.log(error);
  }
};
export default ConnectToDb;
