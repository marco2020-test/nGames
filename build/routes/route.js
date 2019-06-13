"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const control = __importStar(require("../controllers/controller"));
class Route {
    constructor() {
        this.rout = express_1.Router();
        this.routes();
    }
    routes() {
        this.rout.get('/searchList', control.getList);
        this.rout.post('/searchClient', control.getClient);
        this.rout.post('/searchQuotes', control.getQuotes);
    }
}
const routerEnd = new Route();
routerEnd.routes();
exports.default = routerEnd.rout;
