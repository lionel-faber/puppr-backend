"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutes = void 0;
class CommonRoutes {
    route(app) {
        app.all('*', function (req, res) {
            res.status(404).send({ message: 'Invalid URL' });
        });
    }
}
exports.CommonRoutes = CommonRoutes;
