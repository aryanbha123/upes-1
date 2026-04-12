import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true,
        trim:true
    },
    content: {
        type: String,
        require:true,
        trim:true
    }
}, {
    timestamps:true
})

export default mongoose.model("Blog", BlogSchema)