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


const MainPage = (props) => {
    return (
        <Panel className="panel" id={props.id}>
            <Div className="panelheader__parent">
                <PanelHeader className="panelheader" before={<PanelHeaderButton className="left"><Icon20FilterOutline className="logo"/></PanelHeaderButton>}>
                    <Text className="panelheader__text">MoodTrack</Text>
                </PanelHeader>
            </Div>
            
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