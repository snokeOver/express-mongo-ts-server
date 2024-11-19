"use strict";
//Controller only handle application logic: it takes the request, send the response and call the service function for database operation
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const student_service_1 = require("./student.service");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("hit");
        return;
        const student = req.body;
        const result = yield (0, student_service_1.createStudentDB)(student);
        res.status(200).send({
            success: true,
            message: "Student data created successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ success: false, message: "Server error" });
    }
});
exports.createStudent = createStudent;
