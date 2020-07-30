import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IPet } from '../modules/pet/model';
import PetService from '../modules/pet/service';
import e = require('express');

export class PetController {

    private pet_service: PetService = new PetService();

    public create_pet(req: Request, res: Response) {
        // this check whether all the filds were send through the request or not
        if (req.body.name && req.body.gender && req.body.age) {
            const pet_params: IPet = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
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
}