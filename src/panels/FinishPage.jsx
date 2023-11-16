import { 
    Panel, 
    Spacing,
    Div,
    Text
} from "@vkontakte/vkui";
import React, { useState } from "react";
import HeaderPanel from "../components/HeaderPanel";
import { DatePanel } from "../components/DatePanel";
import "../css/FinishPage.css";
import { useSelector } from "react-redux";
import frame20 from "../img/Frame 20.svg";
import frame21 from "../img/Frame 21.svg";
import frame22 from "../img/Frame 22.svg";
import frame23 from "../img/Frame 23.svg";
import frame24 from "../img/Frame 24.svg";

const FinishPage = () => {
    const emotions = useSelector(state => state.emotion.emotions)
    const emotionImage = useSelector(state => state.emotion.emotionImage);

    // if (emotionImage === "frame20") {
    //     setImage(frame20)
    // }

    // if (emotionImage === "frame21") {
    //     setImage(frame21)
    // }

    // if (emotionImage === "frame22") {
    //     setImage(frame22)
    // }

    // if (emotionImage === "frame23") {
    //     setImage(frame23)
    // }

    // if (emotionImage === "frame24") {
    //     setImage(frame24)
    // }

    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />

            <Spacing size={20} />

            <Div className="title_text">
                <Text className="text">
                    Отлично!<br />
                    Продолжай записывать свои эмоции и твой дневник наполнится озарениями.
                </Text>
            </Div>

            <Div className="result_wrapper">
                <Div className="image_wrapper">
                    <img src={emotionImage} alt="" />
                </Div>
                <Div className="info_wrapper">
                    {emotions}
                </Div>
            </Div>
        </Panel>
    );
}

export default FinishPage;