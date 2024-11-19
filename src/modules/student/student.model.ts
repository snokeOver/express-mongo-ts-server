import { Schema, model } from "mongoose";
import { IGuardian, IName, IStudent } from "./student.interface";

const studentNameSchema = new Schema<IName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
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
    required: true,
    unique: true,
  },

  name: {
    type: studentNameSchema,
    required: true,
  },

  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "Others"],
      message: "{VALUE} is not valid",
    },
    required: true,
  },

  dateOfBirth: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  contactNo: {
    type: String,
    required: true,
  },

  emergencyContactNo: {
    type: String,
    required: true,
  },

  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },

  presentAddress: {
    type: String,
    required: true,
  },

  permanetAddress: {
    type: String,
    required: true,
  },

  guardian: {
    type: studentGuardianSchema,
    required: true,
  },

  profileImage: {
    type: String,
  },

  isActive: {
    type: String,
    enum: ["Active", "blocked"],
    default: "Active",
  },
});

export const StudentModel = model<IStudent>("students", studentSchema);
