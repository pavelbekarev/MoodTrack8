import { 
    Panel,
    Group,
    Div,
    CellButton,
    Text,
    Separator,
    Spacing
} from "@vkontakte/vkui";
import { Icon24ChevronCompactLeft } from "@vkontakte/icons";
import { Icon24ChevronCompactRight } from "@vkontakte/icons";
import React, {useState} from "react"
import HeaderPanel from "../../components/HeaderPanel";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import "../../css/Emotions.css";
import { useDispatch } from "react-redux";

const EmotionHappy = () => {
    const routeNavigator = useRouteNavigator();
    const dispatch = useDispatch();

    let currentDate = new Date();

    const month = {
        1: "января",
        2: "февраля",
        3: "марта",
        4: "апреля",
        5: "мая",
        6: "июня",
        7: "июля",
        8: "августа",
        9: "сентября",
        10: "октября",
        11: "ноября",
        12: "декабря"
    }

    const [currentDay, setCurrentDay] = useState(currentDate.getDate());
    const [currentMonth, setCurrentMonth] = useState(month[currentDate.getMonth() + 1]);
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    currentDate = `${currentDay} ${currentMonth}, ${currentYear}`

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

                    <Text className="textLayout">{currentDate}</Text>
                    
                    <CellButton 
                        onClick={() => routeNavigator.push(`/emotionIntensivity/:anger`)}
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
            <Separator />

            <Spacing size={77}/>

            <Div className="title_text">
                <span className="text">Давай уточним, что ты еще испытал</span>
            </Div>

            <Div className="list_wrapper">
                <Div className="cellbuttons_row">
                    <CellButton
                        centered 
                        className="cellbutton_wrapper"
                        onClick={() => dispatch({type : "addEmotion", payload : "Гнев"})}
                    >
                        Гнев
                    </CellButton>
                    <CellButton 
                        centered 
                        className="cellbutton_wrapper" 
                        onClick={() => dispatch({type : "addEmotion", payload : "Боль"})}
                    >
                        Боль
                    </CellButton>
                    <CellButton 
                        centered 
                        className="cellbutton_wrapper" 
                        onClick={() => dispatch({type : "addEmotion", payload : "Раздражение"})}
                    >
                        Раздражение
                    </CellButton>
                    <CellButton 
                        centered 
                        className="cellbutton_wrapper" 
                        onClick={() => dispatch({type : "addEmotion", payload : "Агрессия"})}
                    >
                        Агрессия
                    </CellButton>
                </Div>
                <Div className="cellbuttons_row">
                <CellButton 
                        centered 
                        className="cellbutton_wrapper" 
                        onClick={() => dispatch({type : "addEmotion", payload : "Презрение"})}
                    >
                        Презрение
                    </CellButton>
                    <CellButton 
                        centered 
                        className="cellbutton_wrapper" 
                        onClick={() => dispatch({type : "addEmotion", payload : "Свирепость"})}
                    >
                        Свирепость
                    </CellButton>
                    <CellButton 
                        centered 
                        className="cellbutton_wrapper" 
                        onClick={() => dispatch({type : "addEmotion", payload : "Ненависть"})}
                    >
                        Ненависть
                    </CellButton>
                    <CellButton 
                        centered 
                        className="cellbutton_wrapper" 
                        onClick={() => dispatch({type : "addEmotion", payload : "Враждебность"})}
                    >
                        Враждебность
                    </CellButton>
                </Div>
            </Div>

            
        </Panel>
    );
}


export default EmotionHappy;