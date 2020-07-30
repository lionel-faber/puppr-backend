"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetRoutes = void 0;
const petController_1 = require("../controllers/petController");
class PetRoutes {
    constructor() {
        this.pet_controller = new petController_1.PetController();
    }
    route(app) {
        app.post('/api/pets/add', (req, res) => {
            this.pet_controller.create_pet(req, res);
        });
        app.get('/api/pets/all', (req, res) => {
            this.pet_controller.get_pets(req, res);
        });
    }
}
exports.PetRoutes = PetRoutes;
