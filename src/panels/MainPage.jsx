import React from "react";
import { Group, Panel, PanelHeader, Text, Paragraph, PanelHeaderBack } from "@vkontakte/vkui";
import { Icon20FilterOutline } from '@vkontakte/icons';
import "./MainPage.css";

export const MainPage = (props) => (
    <Panel id={props.id}>
        <PanelHeader before={<Icon20FilterOutline width={28} height={28} />} separator={false} className="mainpage__panelheader">MoodTrack</PanelHeader>
        <Group mode="plain" className="mainpage__content">
            <Text>Доброе утро!</Text>
            <Paragraph>Календарь на октябрь</Paragraph>
        </Group>
    </Panel>
);