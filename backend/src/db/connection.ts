import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL, {
      ssl: true,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Can not connect to MongoDB");
  }
}
async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Couldnt disconnect from MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
