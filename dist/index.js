"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoUrl = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const server_1 = require("./server");
const student_route_1 = __importDefault(require("./modules/student/student.route"));
//Initialize dotenv variables access
dotenv_1.default.config();
const port = process.env.PORT;
exports.mongoUrl = process.env.MONGODB_URL;
//Connect mongoDB via mongoose
(0, server_1.connectToDB)();
//Initialize app
const app = (0, express_1.default)();
//Primary middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Allication routes
app.use("/api/student", student_route_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
