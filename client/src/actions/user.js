import { setUsers } from "../store/setEmotion";

function getSets() {
    return async dispatch => {
        try {
            await fetch("http://localhost:5000/api/user/getUsers")
                .then(res => res.json())
                .then(json => dispatch(setUsers(json)))
        }

        catch (e) {
            console.log(e.response.data.message)
        }
    }
}


export { getSets };