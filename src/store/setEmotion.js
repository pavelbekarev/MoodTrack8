// const initialState = {
//     emotions: []
// }

// export const setEmotion = (state = initialState, action) => {
//     switch (action.type) {
//         case "addEmotion" :
//             return {...state, emotions: [...state.emotions, action.payload]}
        
//         default:
//             return state;
//     }
// }

import { createSlice } from "@reduxjs/toolkit";

const setEmotion = createSlice({
    name: "emotion",
    initialState: {
        actions: [],
        emotions: [],
        emotionImage: ""
    },
    reducers: {
        addEmotion(state, action) {
            !state.emotions.includes(action.payload) && state.emotions.push(action.payload);
        },

        setAction(state, action) {
            state.actions = action.payload;
        },

        clearAction(state, action) {
            state.actions = [];
        },

        addAction(state, action) {
            state.actions.push(action.payload);
        },

        setEmotionImage(state, action) {
            state.emotionImage = action.payload;
        }
    }
})

export const {addEmotion, setAction, clearAction, addAction, setEmotionImage} = setEmotion.actions;
export default setEmotion.reducer; 