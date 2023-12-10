const Note = require("../models/Note");

class NoteController {
    async createNote(req, res) {
        // try {
            const note = new Note({
                // user_id:            req.body.user_id,
                date_value:         req.body.date_value, 
                emotion_name:       req.body.emotion_name, 
                emotions:           req.body.emotions,
                action_name:        req.body.action_name, 
                intensivity_name:   req.body.intensivity_name, 
                thoughts_name:      req.body.thoughts_name
            })

            await note.save();
            return res.status(200).json({message: `Note was created`});
        // }


        // catch (e) {
        //     console.log("Server error")
        // }
    }


    async getNotes(req, res) {
        try {
            const notes = await Note.find();
            return res.json(notes);
        }

        catch (e) {
            console.log(req.body);
            res.send({message: "Server error"});
        }
    }


    async getBestDay(req, res) {
        try {
            const candidateNote = await Note.find().json();
            console.log(candidateNote);
        }

        catch (e) {

        }
    }
}


module.exports = new NoteController();