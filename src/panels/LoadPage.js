import React, { Fragment } from "react";
import { Avatar, Group, Panel, PanelHeader, Div } from "@vkontakte/vkui";
import './LoadPage.css';
import persik from "../img/persik.png"

export const LoadPage = (id) => (
    <Panel id={id}>
        <Fragment>
            <Group className="loadpage__panel">
                <Div>
                    <h1 className="loadpage__header">Доброе утро</h1>
                    <img className="loadpage__img" src={persik} alt="Jopa image"></img>
                </Div>
            </Group>
        </Fragment>
    </Panel>
);