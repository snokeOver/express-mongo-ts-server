//Controller only handle application logic: it takes the request, send the response and call the service function for database operation

import { Request, Response } from "express";
import {
  createStudentDB,
  getAllStudentDB,
  getAStudentDB,
} from "./student.service";
import { IError } from "../../types-interfaces/interfaces";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await createStudentDB(student);
    res.status(200).send({
      success: true,
      message: "Student data created successfully!",
      data: result,
    });
  } catch (error) {
    console.log((error as IError).message);
    res.status(500).send({ success: false, message: "Server error" });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await getAllStudentDB();
    res.status(200).send({
      success: true,
      message: "Students data fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).send({ success: false, message: "Server error" });
  }
};

export const getAStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getAStudentDB(id);
    res.status(200).send({
      success: true,
      message: "Student data fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).send({ success: false, message: "Server error" });
  }
};
