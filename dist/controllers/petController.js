"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/pet/service");
class PetController {
    constructor() {
        this.pet_service = new service_2.default();
    }
    create_pet(req, res) {
        // this check whether all the filds were send through the request or not
        if (req.body.name && req.body.gender && req.body.age) {
            const pet_params = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
            };
            this.pet_service.addPet(pet_params, (err, pet_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse(pet_data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            service_1.insufficientParameters(res);
        }
    }
    get_pets(req, res) {
        this.pet_service.getAllPets((err, pets) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse(pets, res);
            }
        });
    }
}
exports.PetController = PetController;
