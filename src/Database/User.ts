import mongoose from "mongoose";
import { AsignatureSchema } from "./Asignature";

//User schema

const userSchema = new mongoose.Schema({
    username: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minLength: 8
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    UserAsignatures: [AsignatureSchema]
})

export default mongoose.model("User", userSchema)