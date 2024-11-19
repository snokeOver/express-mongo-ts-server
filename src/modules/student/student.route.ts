//Controller will only handle the routes with the help of express route and call the controller function

import express from "express";
import {
  createStudent,
  getAllStudents,
  getAStudent,
} from "./student.controller";

const studentRouter = express.Router();

studentRouter.post("/create-student", createStudent);
studentRouter.get("/get-all-students", getAllStudents);
studentRouter.get("/get-a-student/:id", getAStudent);

export default studentRouter;
