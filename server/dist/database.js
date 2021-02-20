"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mysql_1 = __importDefault(require("mysql"));
class dbConnect {
    static connect() {
        const connection = mysql_1.default.createConnection({
            host: 'wikiprojectdb.cju7fv11u0ey.us-east-2.rds.amazonaws.com',
            user: 'admin',
            password: 'Gksmf0410!',
            port: 3306
        });
        connection.connect(function (err) {
            if (err) {
                console.error('Database connection failed' + err.stack);
                return;
            }
            console.log('connected to database');
        });
    }
}
exports.dbConnect = dbConnect;
