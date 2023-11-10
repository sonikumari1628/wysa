import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question:{
        type: String,
        // required: true,
    },
    options: [
        {
           type: Array,
        //    required: true,
           default: []
        },
    ],
    type:{
        type: String 
    }
});

export default mongoose.model('Question', questionSchema);