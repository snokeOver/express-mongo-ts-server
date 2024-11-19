import mongoose from "mongoose";
import { mongoUrl } from ".";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const cached: MongooseCache = { conn: null, promise: null };
export const connectToDB = async (): Promise<typeof mongoose> => {
  if (cached.conn) return cached.conn;
  if (!mongoUrl) throw new Error("MongoDB URL is missing in env file");

  try {
    cached.promise = mongoose
      .connect(mongoUrl)
      .then((mongooseInstance) => mongooseInstance);
  } catch (error) {
    cached.promise = null;
    throw new Error(`Falied to connect MongoDB ${error}`);
  }

  cached.conn = await cached.promise;
  console.log("MongoDB connection successul !");
  return cached.conn;
};
