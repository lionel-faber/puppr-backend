"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class PetService {
    addPet(pet_params, callback) {
        const _session = new schema_1.default(pet_params);
        _session.save(callback);
    }
    getAllPets(callback) {
        schema_1.default.find({}, callback);
    }
    filterPet(query, callback) {
        schema_1.default.findOne(query, callback);
    }
    updatePet(pet_params, callback) {
        const query = { _id: pet_params._id };
        schema_1.default.findOneAndUpdate(query, pet_params, callback);
    }
    deletePet(_id, callback) {
        const query = { _id: _id };
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = PetService;
