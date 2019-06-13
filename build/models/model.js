"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const listas = new mongoose_1.Schema({
    ID_LIST: Number,
    DESCRIPTION: String
});
exports.default = mongoose_1.model('Post', listas);
