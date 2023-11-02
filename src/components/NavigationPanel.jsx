import React, { useState } from "react"
import 
{ 
    Div,
    CellButton,
    Text,
    Group
} from "@vkontakte/vkui";
import "../css/EmotionPage.css"
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Icon24ChevronCompactLeft } from "@vkontakte/icons";
import { Icon24ChevronCompactRight } from "@vkontakte/icons";

export default function NavigationPanel({currentDate}) {
    const routeNavigator = useRouteNavigator();

    return (
        <Group className="dateLayout_wrapper">
            <Div className="dateLayout">
                <CellButton 
                    onClick={""} 
                    centered 
                    className="prevButton cellButton"
                >
                    <Icon24ChevronCompactLeft
                        className="cellButtonIcon" 
                        style={{width: 16, height:24}}
                    />
                </CellButton>

                <Text className="textLayout">{currentDate}</Text>

                
                <CellButton 
                    onClick={() => routeNavigator.push("/emotion_list")}
                    centered 
                    className="nextButton cellButton"
                >
                    <Icon24ChevronCompactRight 
                        className="cellButtonIcon" 
                        style={{width: 16, height:24}}
                    />
                </CellButton>
            </Div>
        </Group>
    );
}