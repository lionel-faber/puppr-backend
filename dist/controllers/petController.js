"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/pet/service");
const environment_1 = require("../environment");
var multer = require("multer");
class PetController {
    constructor() {
        this.pet_service = new service_2.default();
        this.file_uploader = multer({
            storage: multer.diskStorage({
                destination: environment_1.default.getStoragePath(),
                filename: function (req, file, callback) {
                    callback(null, file.fieldname + "_" + Date.now() + file.originalname);
                }
            })
        });
    }
    create_pet(req, res) {
        // this check whether all the filds were send through the request or not
        if (req.body.name && req.body.gender && req.body.age && req.file && req.about) {
            const pet_params = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
                about: req.body.about,
                image_url: '/static/' + req.file.filename
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
