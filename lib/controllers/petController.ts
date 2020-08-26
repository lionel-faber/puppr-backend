import { Request, Response } from 'multer';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IPet } from '../modules/pet/model';
import PetService from '../modules/pet/service';
import Environment from '../environment';
var multer = require("multer");

export class PetController {

    private pet_service: PetService = new PetService();

    public create_pet(req: Request, res: Response) {
        // this check whether all the filds were send through the request or not
        if (req.body.name && req.body.gender && req.body.age && req.file && req.about) {
            const pet_params: IPet = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
                about: req.body.about,
                image_url: '/static/' + req.file.filename
            };
            this.pet_service.addPet(pet_params, (err: any, pet_data: IPet) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse(pet_data, res);
                }
            });
        } else {
            // error response if some fields are missing in request body
            insufficientParameters(res);
        }
    }

    public get_pets(req: Request, res: Response) {
        this.pet_service.getAllPets((err: any, pets: [IPet]) => {
            if (err) {
                mongoError(err, res);
            } else {
                successResponse(pets, res);
            }
        });
    }

    public file_uploader = multer({
        storage: multer.diskStorage({
            destination: Environment.getStoragePath(),
            filename: function (req, file, callback) {
                callback(null, file.fieldname + "_" + Date.now() + file.originalname)
            }
        })
    });
}