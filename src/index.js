import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { RouterProvider, createHashRouter } from "@vkontakte/vk-mini-apps-router";
import '@vkontakte/vkui/dist/vkui.css';
import {
  AdaptivityProvider,
  ConfigProvider, 
  AppRoot
} from '@vkontakte/vkui';

// Init VK Mini App
bridge.send("VKWebAppInit");

const router = createHashRouter([
  {
    path: '/',
    panel: "home_panel",
    view: "default_view",
  },
  {
    path: 'profile',
    panel: "profile_panel",
    view: "default_view",
  },
  {
    path: 'calendar',
    panel: "calendar_panel",
    view: "default_view",
  },
  {
    path: 'emotions',
    panel: "emotions_panel",
    view: "default_view",
  },
  {
    path: 'emotion_list:happy',
    panel: "emotionHappy_panel",
    view: "default_view",
  },
  {
    path: 'emotion_list:anger',
    panel: "emotionAnger_panel",
    view: "default_view",
  },
  {
    path: 'emotion_list:sadness',
    panel: "emotionSadness_panel",
    view: "default_view",
  },
  {
    path: 'emotion_list:surprise',
    panel: "emotionSurprise_panel",
    view: "default_view",
  },
  {
    path: 'emotion_list:dislike',
    panel: "emotionDislike_panel",
    view: "default_view",
  },
  {
    path: 'emotionIntensivity',
    panel: "emotionIntensivity_panel",
    view: "default_view",
  }

  

]);


ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
