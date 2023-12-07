import { 
    Panel,
    Group,
    Div,
    CellButton,
    Text,
    Separator,
    Spacing,
    Slider
} from "@vkontakte/vkui";
import { Icon24ChevronCompactLeft } from "@vkontakte/icons";
import { Icon24ChevronCompactRight } from "@vkontakte/icons";
import React, {useEffect, useState} from "react"
import HeaderPanel from "../components/HeaderPanel";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import "../css/Emotions.css";
import "../css/EmotionPage.css";

import { useSelector } from "react-redux";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import frame24 from "../img/Frame24.svg";
import frame20 from "../img/Frame20.svg";
import frame21 from "../img/Frame21.svg";
import frame22 from "../img/Frame22.svg";
import frame23 from "../img/Frame23.svg";


const EmotionIntensivityVertical = () => {
    const routeNavigator = useRouteNavigator();
    const params = useParams();
    const [image, setImage] = useState();
    const [valueStep, setValueStep] = useState(1);

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

    currentDate = `${currentDay} ${currentMonth}, ${currentYear}`;

    useEffect(() => {
        if (params.emotionType === ':anger'){
            setImage(frame24)
        }
    
        if (params.emotionType === ':happy'){
            setImage(frame20)
        }
    
        if (params.emotionType === ':dislike'){
            setImage(frame23)
        }
    
        if (params.emotionType === ':sadness'){
            setImage(frame21)
        }
    
        if (params.emotionType === ':surprise'){
            setImage(frame22)
        }
    }, []);

    return (
        <Panel>
            <HeaderPanel />
            <Group className="dateLayout_wrapper">
                <Div className="dateLayout">
                    <Text className="textLayout">{currentDate}</Text>
                </Div>
            </Group>
            <Separator />

            <Spacing size={20} />

            <Div className="title_text">
                <Text className="text">Насколько интенсивной была эта эмоция?</Text>
            </Div>
            
            <Spacing size={64} />

            <Div className="set_intensivity_wrapper">
                <Div className="emotion_image">
                    <img 
                        src={image} 
                        alt=""
                        style={{width: Number(valueStep*30)}}
                    />
                </Div>

                <Spacing size={96} />

                <Div className="slider_wrapper">
                    <Slider
                        step={1}
                        min={1}
                        max={5}
                        value={Number(valueStep)}
                        aria-labelledby="with-step"
                        onChange={setValueStep}
                    />
                </Div>

                <Spacing size={37} />
                <Div className="button_wrapper">
                    <CellButton 
                        className="goNext-button"
                        centered
                        onClick={() => routeNavigator.push("/")}
                    >
                        <div className="goNext-button_wrapper">
                            <span>Продолжить</span>
                            <Icon24ChevronCompactRight />
                        </div>
                    </CellButton>
                </Div>
            </Div>
        </Panel>
    );
}


export default EmotionIntensivityVertical;