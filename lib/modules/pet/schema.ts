import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    age: String,
    gender: String,
    about: String,
    image_url: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model('pets', schema);