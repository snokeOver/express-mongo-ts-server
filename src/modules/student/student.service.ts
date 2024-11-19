//This is the business logic

import { IError } from "../../types-interfaces/interfaces";
import { IStudent } from "./student.interface";
import { StudentModel } from "./student.model";

// Create a student data
export const createStudentDB = async (student: IStudent) => {
  try {
    const result = await StudentModel.create(student);
    return result;
  } catch (error) {
    console.log("Error occured at service side", (error as IError).message);
  }
};

// Get all student data
export const getAllStudentDB = async () => {
  try {
    const result = await StudentModel.find();
    return result;
  } catch (error) {
    console.log("Error occured at service side", (error as IError).message);
  }
};

// Get all student data
export const getAStudentDB = async (studentId: string) => {
  try {
    const result = await StudentModel.findOne({ id: studentId });
    return result;
  } catch (error) {
    console.log("Error occured at service side", (error as IError).message);
  }
};
