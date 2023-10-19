import React, { useState } from "react";
import bridge from '@vkontakte/vk-bridge';
import { 
    Panel, 
    PanelHeader, 
    Div, 
    PanelHeaderButton, 
    Text,
    Group,
    Spacing,
    Avatar,
    Cell,
    List
} from "@vkontakte/vkui";

import { Icon16Poll, Icon20FilterOutline, Icon28PaletteOutline, Icon28SettingsOutline, Icon28UserOutline } from '@vkontakte/icons';
import "../css/MainPage.css";
import { useEffect } from "react";
import "../css/ProfilePage.css";
import HeaderPanel from "../components/HeaderPanel";


export default function ProfilePage() {
    const [fetchedUser, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
        }

        fetchData();
    }, []);

    return (
        <Panel centered>
            <HeaderPanel />
            <Spacing size={80} />
            {
                fetchedUser 
                ? 
                <Avatar className="profile_avatar" src={fetchedUser.photo_200} size={96}/>
                :
                <Avatar className="profile_avatar" style={{backgroundColor: "rgba(121, 170, 218, 1)"}} size={96} />
            }
            <Spacing size={80} />
            <Group>
                <Div className="profile_list">
                    <Cell before={<Icon28UserOutline />} style={{width: "232"}}>Аккаунт</Cell>
                    <Cell before={<Icon28PaletteOutline />}>Внешний вид</Cell>
                    <Cell before={<Icon28SettingsOutline />}>Основные</Cell>
                    <Cell before={<Icon16Poll style={{width: 34, height: 34}}/>}>Статистика</Cell>
                </Div>
            </Group>
        </Panel>
    );
}