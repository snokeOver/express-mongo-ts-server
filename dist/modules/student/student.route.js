"use strict";
//Controller will only handle the routes with the help of express route and call the controller function
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const studentRouter = express_1.default.Router();
studentRouter.post("/create-student", student_controller_1.createStudent);
exports.default = studentRouter;
