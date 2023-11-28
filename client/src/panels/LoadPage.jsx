import React from "react";
import { 
    Avatar, 
    Group, 
    Panel, 
    PanelHeader, 
    Div, 
    Spacing, 
    Text, 
    Image
} from "@vkontakte/vkui";

import '../css/LoadPage.css';
import logo from "../img/logo.svg"
import smile from "../img/smile.svg"
import smile1 from "../img/smile1.svg"
import colorfull_logo from "../img/colorfull-logo.svg"


export const LoadPage = (props) => (
    <Panel className="panel" centered id={props.id}>
        <img className="logo" src={logo}></img>
    </Panel>
);
