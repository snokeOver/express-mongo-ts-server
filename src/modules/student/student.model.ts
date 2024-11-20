import { Schema, model } from "mongoose";
import { IGuardian, IName, IStudent } from "./student.interface";
import validator from "validator";

const studentNameSchema = new Schema<IName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    maxlength: [20, "First name can't be greater than 20 characters"],
    validate: {
      validator: function (value: string) {
        const formatedName =
          value.charAt(0).toUpperCase() + value.toLocaleLowerCase().slice(1);
        return formatedName === value;
      },
      message: "{VALUE} is not capitalized",
    },
  },

  middleName: {
    type: String,
  },

  lastName: {
    type: String,
    required: [true, "Last name is required"],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "{VALUE} is not alpha only",
    },
  },
});

const studentGuardianSchema = new Schema<IGuardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
  },

  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },

  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },

  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
  },

  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },

  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
});

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
  },

  name: {
    type: studentNameSchema,
    required: [true, "Student name is required"],
  },

  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "Others"],
      message: "{VALUE} is not a valid gender",
    },
    required: [true, "Gender is required"],
  },

  dateOfBirth: {
    type: String,
    required: [true, "Date of birth is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} is not valid email",
    },
  },

  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
  },

  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },

  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not a valid blood group",
    },
    required: [true, "Blood group is required"],
  },

  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },

  permanetAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },

  guardian: {
    type: studentGuardianSchema,
    required: [true, "Guardian information is required"],
  },

  profileImage: {
    type: String,
  },

  isActive: {
    type: String,
    enum: {
      values: ["Active", "blocked"],
      message: "{VALUE} is not a valid status",
    },
    default: "Active",
  },
});

export const StudentModel = model<IStudent>("students", studentSchema);
