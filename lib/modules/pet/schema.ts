import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    age: String,
    gender: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model('pets', schema);