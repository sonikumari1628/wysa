import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    username: {
        type: String,
        
    },
    result: {
        type: Array,
        default: []
    }
});

export default mongoose.model('Result', resultSchema);