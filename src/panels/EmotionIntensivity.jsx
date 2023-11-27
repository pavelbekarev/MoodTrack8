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
import { DatePanel } from "../components/DatePanel";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import frame24 from "../img/Frame 24.svg";
import frame20 from "../img/Frame 20.svg";
import frame21 from "../img/Frame 21.svg";
import frame22 from "../img/Frame 22.svg";
import frame23 from "../img/Frame 23.svg";
import { setSliderValue } from "../store/setEmotion";




const EmotionIntensivity = () => {
    const routeNavigator = useRouteNavigator();
    const params = useParams();
    const [image, setImage] = useState();
    const [valueStep, setValueStep] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSliderValue(valueStep))
    }, [valueStep])
    
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
            <DatePanel />

            <Spacing size={20} />

            <Div className="title_text">
                <Text className="text intensivity_text">Насколько интенсивной была эта эмоция?</Text>
            </Div>
            
            <Spacing size={100} />

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
                        onClick={() => routeNavigator.push(`/actions/${params.emotionType}`)}
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


export default EmotionIntensivity;