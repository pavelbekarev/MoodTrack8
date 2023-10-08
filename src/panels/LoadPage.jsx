import React from "react";
import { Avatar, Group, Panel, PanelHeader, Div, Spacing, Text, Image } from "@vkontakte/vkui";
import './LoadPage.css';
import logo from "../img/logo.svg"

export const LoadPage = (props) => (
    <Panel id={props.id}>
        <Group className="loadpage__panel">
            <Div className="loadpage__div">
                <img className="loadpage__logo" src={logo} alt="Logo image"></img>
            </Div>
        </Group>
    </Panel>
);
