import { 
    Panel,
    Group,
    Div,
    CellButton,
    Text
} from "@vkontakte/vkui";
import { Icon24ChevronCompactLeft } from "@vkontakte/icons";
import { Icon24ChevronCompactRight } from "@vkontakte/icons";
import React from "react"
import HeaderPanel from "../../components/HeaderPanel";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";


const EmotionDislike = () => {
    const routeNavigator = useRouteNavigator();

    return (
        <Panel>
            <HeaderPanel />
            <Group className="dateLayout_wrapper">
                <Div className="dateLayout">
                    <CellButton 
                        onClick={() => routeNavigator.back()} 
                        centered 
                        className="prevButton cellButton"
                    >
                        <Icon24ChevronCompactLeft
                            className="cellButtonIcon" 
                            style={{width: 16, height:24}}
                        />
                    </CellButton>

                    <Text className="textLayout">asd</Text>

                    
                    <CellButton 
                        onClick={() => routeNavigator.push("/")}
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

            <Text>Dislike</Text>
        </Panel>
    );
}


export default EmotionDislike;