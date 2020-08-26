"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutes = void 0;
const environment_1 = require("../environment");
let express = require("express");
class CommonRoutes {
    route(app) {
        app.use('/static', express.static(environment_1.default.getStoragePath()));
        // Mismatch URL
        app.all('*', function (req, res) {
            res.status(404).send({ message: 'Invalid URL' });
        });
    }
}
exports.CommonRoutes = CommonRoutes;
