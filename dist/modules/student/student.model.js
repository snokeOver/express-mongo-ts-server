"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const studentNameSchema = new mongoose_1.Schema({
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
const studentGuardianSchema = new mongoose_1.Schema({
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
const studentSchema = new mongoose_1.Schema({
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
exports.StudentModel = (0, mongoose_1.model)("Students", studentSchema);
