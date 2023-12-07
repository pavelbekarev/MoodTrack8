import { createSlice } from "@reduxjs/toolkit";

const setEmotion = createSlice({
    name: "emotion",
    initialState: {
        actions: [],        // * \\
        emotions: [],       // * \\
        emotionImage: "",   // * \\
        sliderValue: 0,     // * \\
        date: " ",           // * \\
        emotionText: "",     // * \\
        users: [],
        notes: [" "]
    },
    reducers: {
        addEmotion(state, action) {
            // !state.emotions.includes(action.payload) && state.emotions.push(action.payload);

            if (state.emotions.includes(action.payload)) {
                state.emotions = state.emotions.filter(e => e !== action.payload)
            }

            else {
                state.emotions.push(action.payload);
            }
        },

        setAction(state, action) {
            state.actions = action.payload;
        },

        clearData(state, action) {
            state.actions = [];       
            state.emotions = [];      
            state.emotionImage = "";  
            state.sliderValue = 0;    
            state.date = "";          
            state.emotionText = "";  
            state.users = [];
            state.notes = [];
        },

        addAction(state, action) {
            // !state.actions.includes(action.payload) && state.actions.push(action.payload);

            if (state.actions.includes(action.payload)) {
                state.actions = state.actions.filter(a => a !== action.payload)
            }

            else {
                state.actions.push(action.payload);
            }
        },

        setEmotionImage(state, action) {
            state.emotionImage = action.payload;
        },

        setSliderValue(state, action) {
            state.sliderValue = action.payload;
        },

        setDate(state, action) {
            state.date = action.payload;
        },

        setEmotionText(state, action) {
            state.emotionText = action.payload;
        },
        
        deleteEmotion(state, action) {
            state.emotions.remove(action.payload);
        },

        setUsers(state, action) {
            state.users = action.payload;
        },

        setNotes(state, action) {
            state.notes = action.payload;
        }
    }
})

export const {addEmotion, setNotes, setAction, addAction, setEmotionImage, clearData, setSliderValue, setUsers, setDate, setEmotionText, deleteEmotion } = setEmotion.actions;
export default setEmotion.reducer; 