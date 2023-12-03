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
    List,
    Separator
} from "@vkontakte/vkui";

import { Icon16Poll, Icon20FilterOutline, Icon28PaletteOutline, Icon28SettingsOutline, Icon28UserOutline, Icon24UserAdded } from '@vkontakte/icons';
import "../css/MainPage.css";
import { useEffect } from "react";
import "../css/ProfilePage.css";
import HeaderPanel from "../components/HeaderPanel";


export default function ProfilePage() {
    const [fetchedUser, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setUserId(bridge.send(() => {
                bridge.subscribe(event => {
                    if (!event.detail) {
                      return;
                    }
                
                    switch(event.detail.type) {
                      case 'VKWebAppOpenCodeReaderResult':
                        if (event.detail.data.result) {
                          // Обработка события в случае успеха
                          console.log(event.detail.data.result);
                        } else {
                          // Ошибка
                        }
                        break;
                      case 'VKWebAppOpenCodeReaderFailed':
                        // Обработка события в случае ошибки
                        console.log(event.detail.data.error_type, event.detail.data.error_data);      
                        break;
                    }
                });
            }))
        }

        fetchData();
    }, []);

    return (
        <Panel>
            <HeaderPanel />
            <Spacing size={80} />
            <div className="profile_panel">
                {
                    fetchedUser 
                    ? 
                    <Avatar className="profile_avatar" src={fetchedUser.photo_200} size={96}/>
                    :
                    <Avatar className="profile_avatar" style={{backgroundColor: "rgba(121, 170, 218, 1)"}} size={96} />
                }
            </div>
            <Spacing size={80} />

            <Separator />
            <Spacing size={11.5} />
            <div className="profile_list-parent">
                <div className="profile_list">
                    <Cell before={<Icon28SettingsOutline />}>Основные</Cell>
                    <Cell before={<Icon16Poll style={{width: 34, height: 34}}/>}>Статистика</Cell>
                </div>
            </div>
        </Panel>
    );
}