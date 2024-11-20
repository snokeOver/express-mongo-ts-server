import { Model } from "mongoose";

export interface IName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}

export interface IStudent {
  id: string;
  name: IName;
  gender: "Male" | "Female" | "Others";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanetAddress: string;
  guardian: IGuardian;
  profileImage?: string;
  isActive: "Active" | "blocked";
}

export interface IStudentMethod {
  isStudentExist(id: string): Promise<IStudent | null>;
}

// Create a new Model type that knows about IStudentMethod...
export type newStudentModel = Model<
  IStudent,
  Record<string, never>,
  IStudentMethod
>;
