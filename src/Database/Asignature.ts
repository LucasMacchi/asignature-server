import mongoose from "mongoose";

//Asignatures schema

export const AsignatureSchema = new mongoose.Schema({
    title: String,
    description: String,
    hour: {
        type: Number,
        min: 0,
        max: 23
    },
    minutes: {
        type: Number,
        min: 0,
        max: 59
    },
    day: {
        type: Number,
        min: 0,
        max: 6
    },
    isDone: Boolean,
    isExpire: Boolean,
    isCheck: Boolean,
})

export default mongoose.model("Asignature", AsignatureSchema)