"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
//import cors from 'cor'
const database_1 = require("./database");
class App {
    constructor(port) {
        this.port = port;
        database_1.dbConnect.connect();
        this.app = express_1.default();
        //this.app.use()
        this.setting();
        this.middleware();
    }
    setting() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middleware() {
        this.app.use(morgan_1.default(`dev`));
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(4000, () => {
                console.log('Server on port 4000');
            });
        });
    }
}
exports.App = App;
