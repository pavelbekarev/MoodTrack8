import React, { useState } from "react"
import { 
    Div,
    Group,
    CellButton,
    Text
} from "@vkontakte/vkui";
import { Icon24ChevronCompactRight } from '@vkontakte/icons';
import { Icon24ChevronCompactLeft } from '@vkontakte/icons';
import "../css/EmotionPage.css"





export default function NavigationPanel(props) {
    let currentDate = new Date();
    let emotion_id = props.emotionId;
	
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

    currentDate = `${currentDay} ${currentMonth}, ${currentYear}`;

    return (
        <Group className="dateLayout_wrapper">
            <Div className="dateLayout">
                {/* Кнопка для перехода на пред. страницу */}
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

                

                {/* Кнопка для перехода на след. страницу */}
                {
                    isReactionSelected 
                    ? 
                    <CellButton 
                        onClick={() => routeNavigator.push(`/emotion_list:${emotion_id}`)}
                        centered 
                        className="nextButton cellButton"
                    >
                        <Icon24ChevronCompactRight 
                            className="cellButtonIcon" 
                            style={{width: 16, height:24}}
                        />
                    </CellButton>
                    :
                    <CellButton 
                        disabled={true}
                        // onClick={() => routeNavigator.push(`/emotion_list:${emotion_id}`)}
                        centered 
                        className="nextButton cellButton"
                    >
                        <Icon24ChevronCompactRight 
                            className="cellButtonIcon" 
                            style={{width: 16, height:24}}
                        />
                    </CellButton>
                }
            </Div>
        </Group>
    );
}