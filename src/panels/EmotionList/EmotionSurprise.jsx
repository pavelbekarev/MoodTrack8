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

const EmotionSurprise = () => {
    const routeNavigator = useRouteNavigator();

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
                    <Text className="textLayout">{currentDate}</Text>
                </Div>
            </Group>

            <Separator />

            <Spacing size={77}/>

            <Div className="title_text">
                <span className="text">Давай уточним, что ты еще испытал</span>
            </Div>

            <Div className="list_wrapper">
                <Div className="cellbuttons_row">
                    <CellButton centered className="cellbutton_wrapper">
                        Потрясение
                    </CellButton>
                    <CellButton centered className="cellbutton_wrapper">Смущение</CellButton>
                    <CellButton centered className="cellbutton_wrapper">Трепет</CellButton>
                    <CellButton centered className="cellbutton_wrapper">Изумление</CellButton>
                </Div>
                <Div className="cellbuttons_row">
                    <CellButton centered className="cellbutton_wrapper">Возбуждение</CellButton>
                    <CellButton centered className="cellbutton_wrapper">Озабоченность</CellButton>
                    <CellButton centered className="cellbutton_wrapper">Смятение</CellButton>
                    <CellButton centered className="cellbutton_wrapper">Шок</CellButton>
                </Div>
            </Div>
        
            <Div className="button_wrapper">
                    <CellButton 
                        className="goNext-button" 
                        centered
                        onClick={() => routeNavigator.push("/emotionIntensivity/:surprise")}
                    >
                            Продолжить
                        </CellButton>
                </Div>
        </Panel>
    );
}


export default EmotionSurprise;