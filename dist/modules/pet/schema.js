"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    age: String,
    gender: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
});
exports.default = mongoose.model('pets', schema);
