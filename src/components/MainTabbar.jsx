import { Icon28MenuOutline, Icon28User } from '@vkontakte/icons';
import Icon48CalendarWhite from './Icon48CalendarWhite';
import Icon48CalendarSelected from './Icon48CalendarSelected';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import "../css/MainTabbar.css";
import { useState } from 'react';

export default function MainTabbar() {
    const routeNavigator = useRouteNavigator();
    const { panel: activePanel } = useActiveVkuiLocation();
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isActiveCalendar, setIsActiveCalendar] = useState(true);
    const [isActiveProfile, setIsActiveProfile] = useState(false);

    return (
        <Tabbar style={{backgroundColor: "#79AADA"}}>
            <TabbarItem
                selected={activePanel === "menu_panel"}
                onClick={() => {
                    routeNavigator.push('/menu'); 
                }}
            >
                <Icon28MenuOutline className={activePanel === "menu_panel" ? "tab_icon-active" : "tab_icon"}/>
            </TabbarItem>
            <TabbarItem
                selected={activePanel === "home_panel"}
                onClick={() => {
                    routeNavigator.push('/'); 
                }}
            >
                {
                    activePanel === "home_panel"
                    ?
                    <Icon48CalendarSelected />
                    :
                    <Icon48CalendarWhite />

                }
            </TabbarItem>
            <TabbarItem
                selected={activePanel === "profile_panel"}
                onClick={() => {
                    routeNavigator.push('/profile'); 
                }}
            >
                <Icon28User className={activePanel === "profile_panel" ? "tab_icon-active" : "tab_icon"}/>
            </TabbarItem>
        </Tabbar>
    );
}