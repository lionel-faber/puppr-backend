import { Application, Request, Response } from 'express';
import Environment from "../environment";

let express = require("express");

export class CommonRoutes {
    public route(app: Application) {   
        app.use('/static', express.static(Environment.getStoragePath()))
        // Mismatch URL
        app.all('*', function (req: Request, res: Response) {
            res.status(404).send({ message: 'Invalid URL' });
        });
    }
}