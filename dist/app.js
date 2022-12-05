"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const auth_route_1 = __importDefault(require("./routes/auth_route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.connectDB)();
app.use('/api/v1', auth_route_1.default);
app.listen(5000, () => {
    console.log('Server is running in port 5000');
});
