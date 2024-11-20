//This is the business logic

import { IStudent } from "./student.interface";
import { StudentModel } from "./student.model";

// Create a student data
export const createStudentDB = async (student: IStudent) => {
  //build in static method
  //   const result = await StudentModel.create(student);

  //Build in instance method

  const studentInstace = new StudentModel(student);

  if (await studentInstace.isStudentExist(student.id))
    throw new Error("Student already exists");

  const result = await studentInstace.save();
  return result;
};

// Get all student data
export const getAllStudentDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// Get all student data
export const getAStudentDB = async (studentId: string) => {
  const result = await StudentModel.findOne({ id: studentId });
  return result;
};
