import { IPet } from './model';
import pets from './schema';

export default class PetService {
    
    public addPet(pet_params: IPet, callback: any) {
        const _session = new pets(pet_params);
        _session.save(callback);
    }

    public getAllPets(callback: any) {
        pets.find({}, callback);
    }

    public filterPet(query: any, callback: any) {
        pets.findOne(query, callback);
    }

    public updatePet(pet_params: IPet, callback: any) {
        const query = { _id: pet_params._id };
        pets.findOneAndUpdate(query, pet_params, callback);
    }
    
    public deletePet(_id: String, callback: any) {
        const query = { _id: _id };
        pets.deleteOne(query, callback);
    }

}