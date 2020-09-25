"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../environment");
const common_routes_1 = require("../routes/common_routes");
const pet_routes_1 = require("../routes/pet_routes");
var cors = require('cors');
class App {
    constructor() {
        this.dbUser = environment_1.default.getDBUserName();
        this.dbPassword = environment_1.default.getDBPassword();
        this.dbName = environment_1.default.getDBName();
        this.mongoUrl = `mongodb+srv://${this.dbUser}:${this.dbPassword}@puppr.arrmx.mongodb.net/${this.dbName}?retryWrites=true&w=majority`;
        this.common_routes = new common_routes_1.CommonRoutes();
        this.pet_routes = new pet_routes_1.PetRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.pet_routes.route(this.app);
        this.common_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;
