const initialState = {
    emotions: []
}

export const setEmotion = (state = initialState, action) => {
    switch (action.type) {
        case "addEmotion" :
            return {...state, emotions: [...state.emotions, action.payload]}
        
        default:
            return state;
    }
}