import { 
    Panel,
    Div,
    Spacing,
    Text,
    FormItem,
    Textarea,
    CellButton
} from "@vkontakte/vkui";
import React, { useState } from "react";
import HeaderPanel from "../components/HeaderPanel";
import { DatePanel } from "../components/DatePanel";
import { useEffect } from "react";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import { Icon24ChevronCompactRight } from "@vkontakte/icons";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import frame24 from "../img/Frame 24.svg";
import frame20 from "../img/Frame 20.svg";
import frame21 from "../img/Frame 21.svg";
import frame22 from "../img/Frame 22.svg";
import frame23 from "../img/Frame 23.svg";

import "../css/EmotionDescription.css";

const EmotionDescription = () => {
    const [image, setImage] = useState();
    const params = useParams();
    const [activeEmotion, setActiveEmotion] = useState("");
    const [textValue, setTextValue] = useState("");
    const routeNavigator = useRouteNavigator();

    useEffect(() => {
        if (params.emotionType === ':anger'){
            setImage(frame24)
            setActiveEmotion("anger")
        }
    
        if (params.emotionType === ':happy'){
            setImage(frame20)
            setActiveEmotion("happy")
        }
    
        if (params.emotionType === ':dislike'){
            setImage(frame23)
            setActiveEmotion("dislike")
        }
    
        if (params.emotionType === ':sadness'){
            setImage(frame21)
            setActiveEmotion("sadness")
        }
    
        if (params.emotionType === ':surprise'){
            setImage(frame22)
            setActiveEmotion("surprise")
        }
    }, []);

    const isActiveEmotion = () => {
        if (activeEmotion === "anger") {
            return "angerStyle";
        }

        if (activeEmotion === "happy") {
            return "happyStyle";
        }

        if (activeEmotion === "dislike") {
            return "dislikeStyle";
        }

        if (activeEmotion === "sadness") {
            return "sadnessStyle";
        }

        if (activeEmotion === "surprise") {
            return "surpriseStyle";
        }
    }

    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />

            <Spacing size={100} />

            <Div className="emotion_image">
                <img
                    src={image} 
                    alt=""
                    className="image"
                />
            </Div>

            <Spacing size={20} />

            <Div className="text_wrapper">
                <Text className={`${isActiveEmotion()} question`}>Какие мысли спровоцировали у тебя данную эмоцию?</Text>
            </Div>

            <Spacing size={30} />

            <FormItem className="input_wrapper">
                <Textarea 
                    className="input" 
                    placeholder="Мы готовы тебя выслушать" 
                    value={textValue}
                    onChange={e => setTextValue(e.target.value)}
                />
            </FormItem>

            <Spacing size={20} />

            <Div className="button_wrapper">
                <CellButton 
                    className="goNext-button"
                    centered
                    onClick={() => routeNavigator.push(`/finishPage`)}
                >
                    <div className="goNext-button_wrapper">
                        <span>Продолжить</span>
                        <Icon24ChevronCompactRight />
                    </div>
                </CellButton>
            </Div>

            <Spacing size={43} />
        </Panel>
    );
}


export default EmotionDescription;