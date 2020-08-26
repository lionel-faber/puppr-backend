import { Application } from 'express';
import { Request, Response } from 'multer';
import { PetController } from '../controllers/petController';

export class PetRoutes {

    private pet_controller: PetController = new PetController();

    public route(app: Application) {

        app.post('/api/pets/add', this.pet_controller.file_uploader.single('petPhoto'), (req: Request, res: Response) => {
            this.pet_controller.create_pet(req, res);
        });

        app.get('/api/pets/all', this.pet_controller.file_uploader.none(), (req: Request, res: Response) => {
            this.pet_controller.get_pets(req, res);
        });
    }
}