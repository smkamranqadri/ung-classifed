import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

let postSchema: mongoose.Schema = new Schema({
    title: {
        type: 'String',
        required: true
    },
    description: {
        type: 'String',
        required: true
    },
    price: {
        type: 'String',
        required: true
    }
});

export default mongoose.model('Post', postSchema);
