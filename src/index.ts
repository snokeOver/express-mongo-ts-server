import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./server";
import studentRouter from "./modules/student/student.route";

//Initialize dotenv variables access
dotenv.config();
const port = process.env.PORT;
export const mongoUrl = process.env.MONGODB_URL;

//Connect mongoDB via mongoose
connectToDB();

//Initialize app
const app = express();

//Primary middlewares
app.use(express.json());
app.use(cors());

// Allication routes
app.use("/api/student", studentRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
