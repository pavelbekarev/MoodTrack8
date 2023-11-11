import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setEmotion } from "./setEmotion";
import { createStore } from "@reduxjs/toolkit";

export const store = createStore(setEmotion);