import mongoose from "mongoose";
//import generateToken from "../Routes/Utils/tokenGenerator";

const TokenSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    type: {
        type: String,
        enum: ["password","validation","none"],
        require: true
    }

})

export default mongoose.model("Token", TokenSchema)