import React, { useState } from "react";
import { 
    Panel, 
    PanelHeader, 
    Div, 
    Title, 
    Button, 
    PanelHeaderButton, 
    Calendar, 
    PanelHeaderBack, 
    Text,
    Group,
    FormLayout,
    FormLayoutGroup,
    FormItem,
    LocaleProvider
} from "@vkontakte/vkui";

import { Icon20FilterOutline } from '@vkontakte/icons';
import "../css/MainPage.css";
import HeaderPanel from "../components/HeaderPanel";


const MainPage = () => {
    return (
        <Panel className="panel">
            <HeaderPanel />
            <Div className="calendar__wrapper">
                <FormLayout>
                    <FormLayoutGroup>
                        <FormItem>
                            <LocaleProvider className="calendar__wrapper">
                                <Calendar className="calendar"></Calendar>
                            </LocaleProvider>
                        </FormItem>
                    </FormLayoutGroup>
                </FormLayout>
            </Div>
            
        </Panel>
    );
    
    
};

export default MainPage;