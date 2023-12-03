import { setNotes } from "../store/setEmotion";

function getNotes() {
    return async dispatch => {
        try {
            await fetch("http://localhost:5000/api/note/getNotes")
                .then(res => res.json())
                .then(json => dispatch(setNotes(json)))
        }

        catch (e) {
            console.log(e.response.data.message)
        }
    }
}

export { getNotes };