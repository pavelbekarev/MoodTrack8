import { createSlice } from "@reduxjs/toolkit";

const setSliderValue = createSlice({
    name: "sliderValue",
    initialState: {
        value: 1
    },
    reducers: {
        setSliderValue(state, action) {
            state.value = action.payload;
        }
    }
})

export const {setSliderValue} = setSliderValue.actions;
export default setEmotion.reducer; 