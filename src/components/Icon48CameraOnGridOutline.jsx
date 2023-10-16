import React from "react"
import calendar_tabbar_icon from "../img/calendar-tabbar-icon.svg";
import { Image } from "@vkontakte/vkui";
import "../css/Calendar_Tabbar_Icon.css";

export default function Icon48CameraOnGridOutline() {
    return (
        <Image className="calendar_tabbar_icon" src={calendar_tabbar_icon}></Image>
    );
};