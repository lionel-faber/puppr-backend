import { Application, Request, Response } from 'express';
import { PetController } from '../controllers/petController';

export class PetRoutes {

    private pet_controller: PetController = new PetController();

    public route(app: Application) {

        app.post('/api/pets/add', (req: Request, res: Response) => {
            this.pet_controller.create_pet(req, res);
        });

        app.get('/api/pets/all', (req: Request, res: Response) => {
            this.pet_controller.get_pets(req, res);
        });

    }
}