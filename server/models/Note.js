const { Schema, model } = require("mongoose");

const Note = new Schema({
    date_value: { type: String, required: true },
    emotion_name: { type: String, required: true },
    emotions: [{ type: String, required: true }],
    action_name: [{ type: String, required: true }],
    intensivity_name: { type: String, required: true, default: 0 },
    thoughts_name: { type: String, required: true }
})

module.exports = model("Note", Note);