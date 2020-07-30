import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";
import { CommonRoutes } from "../routes/common_routes";
import { PetRoutes } from "../routes/pet_routes";

class App {

    public app: express.Application;
    private dbUser: String = environment.getDBUserName();
    private dbPassword: String = environment.getDBPassword();
    private dbName: String = environment.getDBUserName();
    
    public mongoUrl: string = `mongodb+srv://${this.dbUser}:${this.dbPassword}@puppr.arrmx.mongodb.net/${this.dbName}?retryWrites=true&w=majority`

    private common_routes: CommonRoutes = new CommonRoutes();
    private pet_routes: PetRoutes = new PetRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.pet_routes.route(this.app);
        this.common_routes.route(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
     }
}

export default new App().app;