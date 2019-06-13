"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const client = new mongoose_1.Schema({
    documento: String
});
exports.default = mongoose_1.model('Cliente', client);
