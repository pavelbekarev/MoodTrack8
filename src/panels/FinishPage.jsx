import { 
    Panel, 
    Spacing,
    Div,
    Text,
    Group,
    CellButton
} from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import HeaderPanel from "../components/HeaderPanel";
import { DatePanel } from "../components/DatePanel";
import "../css/FinishPage.css";
import { useSelector } from "react-redux";
import frame20 from "../img/Frame 20.svg";
import frame21 from "../img/Frame 21.svg";
import frame22 from "../img/Frame 22.svg";
import frame23 from "../img/Frame 23.svg";
import frame24 from "../img/Frame 24.svg";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const FinishPage = () => {  
    let styleCss = "";
    const routeNavigator = useRouteNavigator();

    const emotions = useSelector(state => state.emotion.emotions)
    const emotionImage = useSelector(state => state.emotion.emotionImage);
    const sliderValue = useSelector(state => state.emotion.sliderValue);
    const date = useSelector(state => state.emotion.date)
    const actions = useSelector(state => state.emotion.actions).map(action => <img className={`action ${styleCss}`} src={action} alt="Действие"/>)
    const emotionText = useSelector(state => state.emotion.emotionText)

    const emotionIntensivityList = {
        0: "",
        1: "очень слабо",
        2: "слабо",
        3: "умеренно",
        4: "сильно",
        5: "очень сильно"
    }

    let emotionType = "";
    if (emotionImage === frame20) {
        emotionType = "Счастье";
        styleCss = "happy";
    }

    if (emotionImage === frame24) {
        emotionType = "Агрессия";
        styleCss = "anger";

    }

    if (emotionImage === frame21) {
        emotionType = "Грусть";
        styleCss = "sadness";
    }

    if (emotionImage === frame22) {
        emotionType = "Удивление";
        styleCss = "surprise";
    }

    if (emotionImage === frame23) {
        emotionType = "Неприязнь";
        styleCss = "dislike";
    }


    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />

            <Spacing size={20} />

            <Div className="title_text">
                <Text className="text finish_text">
                    Отлично!<br />
                    Продолжай записывать свои эмоции и твой дневник наполнится озарениями.
                </Text>
            </Div>

            <Div className="result_wrapper">
                <Div className="image_wrapper">
                    <img className="emotionImage" src={emotionImage} alt="" />
                </Div>
                <Div className="info_wrapper">
                    <Text className={`date-info`} >{`Сегодня, ${date}`}</Text>
                    <Text className={`emotionType-info ${styleCss}`} >{`${emotionType}, интенсивность: ${emotionIntensivityList[sliderValue]}`}</Text>
                    <Text className={`text-info ${styleCss}`}>{emotions.map(e => `${e.toLowerCase()}`)}</Text>
                    <Text className={`actions-info ${styleCss}`} >{actions}</Text>
                    <Text className={`emotion-text ${styleCss}`} >{emotionText}</Text>
                </Div>
            </Div>


            <Div className="button_wrapper-finish">
                <CellButton
                    className="save-button" 
                    centered
                    onClick={() => {
                        // dispatch(addEmotion(emotionsList))
                        routeNavigator.push(`/articlePage`);
                    }}
                >
                    Сохранить запись
                </CellButton>
            </Div>
        </Panel>
    );
}

export default FinishPage;