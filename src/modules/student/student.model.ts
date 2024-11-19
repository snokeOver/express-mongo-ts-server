import { Schema, model } from "mongoose";
import { IGuardian, IName, IStudent } from "./student.interface";

const studentNameSchema = new Schema<IName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const studentGuardianSchema = new Schema<IGuardian>({
  fatherName: {
    type: String,
    required: true,
  },

  fatherContactNo: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },

  motherName: {
    type: String,
    required: true,
  },

  motherContactNo: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
  },

  name: studentNameSchema,

  gender: ["Male", "Female"],

  dateOfBirth: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  contactNo: {
    type: String,
    required: true,
  },

  emergencyContactNo: {
    type: String,
    required: true,
  },

  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],

  presentAddress: {
    type: String,
    required: true,
  },

  permanetAddress: {
    type: String,
    required: true,
  },

  guardian: studentGuardianSchema,

  profileImage: {
    type: String,
  },

  isActive: ["Active", "blocked"],
});

export const StudentModel = model<IStudent>("students", studentSchema);
