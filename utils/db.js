const MONGO_URI =
  "mongodb+srv://koustubh:koustubh@jersey-store.brv6ecf.mongodb.net/?retryWrites=true&w=majority";

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
