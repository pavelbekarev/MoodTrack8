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
import { DatePanel } from "../../components/DatePanel";
import { addEmotion } from "../../store/setEmotion";
import { useSelector } from "react-redux";

const EmotionSadness = () => {
    const routeNavigator = useRouteNavigator();
    const dispatch = useDispatch();
    const choosenEmotions = useSelector(state => state.emotion.emotions);

    const [isEmotionChoose1, setIsEmotionChoose1] = useState(false);
    const [isEmotionChoose2, setIsEmotionChoose2] = useState(false);
    const [isEmotionChoose3, setIsEmotionChoose3] = useState(false);
    const [isEmotionChoose4, setIsEmotionChoose4] = useState(false);
    const [isEmotionChoose5, setIsEmotionChoose5] = useState(false);
    const [isEmotionChoose6, setIsEmotionChoose6] = useState(false);
    const [isEmotionChoose7, setIsEmotionChoose7] = useState(false);
    const [isEmotionChoose8, setIsEmotionChoose8] = useState(false);

    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />

            <Spacing size={77}/>

            <Div className="title_text">
                <span className="text emotions_text">Давай уточним, что ты еще испытал</span>
            </Div>

            <Div className="list_wrapper">
                <Div className="cellbuttons_row">
                    <CellButton
                        id="cellbutton1"
                        centered 
                        className={isEmotionChoose1 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch(addEmotion("Апатия "));
                            isEmotionChoose1 ? setIsEmotionChoose1(false) : setIsEmotionChoose1(true)
                        }}
                    >
                        Апатия
                    </CellButton>
                    <CellButton 
                        id="cellbutton2"
                        centered 
                        className={isEmotionChoose2 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch(addEmotion("Отчаяние "));
                            isEmotionChoose2 ? setIsEmotionChoose2(false) : setIsEmotionChoose2(true)
                        }}
                    >
                        Отчаяние
                    </CellButton>
                    <CellButton 
                        id="cellbutton3"
                        centered 
                        className={isEmotionChoose3 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch(addEmotion("Потерянность "));
                            isEmotionChoose3 ? setIsEmotionChoose3(false) : setIsEmotionChoose3(true)
                        }}
                    >
                        Потерянность
                    </CellButton>
                    <CellButton 
                        id="cellbutton4"
                        centered 
                        className={isEmotionChoose4 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch(addEmotion("Подавленность "));
                            isEmotionChoose4 ? setIsEmotionChoose4(false) : setIsEmotionChoose4(true)
                        }}
                    >
                        Подавленность
                    </CellButton>
                </Div>
                <Div className="cellbuttons_row">
                    <CellButton 
                        id="cellbutton5"
                        centered 
                        className={isEmotionChoose5 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch(addEmotion("Одиночество "));
                            isEmotionChoose5 ? setIsEmotionChoose5(false) : setIsEmotionChoose5(true)
                        }}
                    >
                        Одиночество
                    </CellButton>
                    <CellButton 
                        id="cellbutton6"
                        centered 
                        className={isEmotionChoose6 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch(addEmotion("Стыд "));
                            isEmotionChoose6 ? setIsEmotionChoose6(false) : setIsEmotionChoose6(true)
                        }}
                    >
                        Стыд
                    </CellButton>
                    <CellButton 
                        id="cellbutton7"
                        centered 
                        className={isEmotionChoose7 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch(addEmotion("Печаль "));
                            isEmotionChoose7 ? setIsEmotionChoose7(false) : setIsEmotionChoose7(true)
                        }}
                    >
                        Печаль
                    </CellButton>
                    <CellButton 
                        id="cellbutton8"
                        centered 
                        className={isEmotionChoose8 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch(addEmotion("Вялость "));
                            isEmotionChoose8 ? setIsEmotionChoose8(false) : setIsEmotionChoose8(true)
                        }}
                    >
                        Вялость
                    </CellButton>
                </Div>
            </Div>

            {
                choosenEmotions.length !== 3 
                ?
                <Text className="choose3-text">Выбери до 3</Text>
                :
                <Div className="button_wrapper-emotion">
                    <CellButton
                        className="save-button" 
                        centered
                        onClick={() => {
                            routeNavigator.push(`/emotionIntensivity/:sadness`);
                        }}
                    >
                        Продолжить
                    </CellButton>
                </Div>
            }
        </Panel>
    );
}


export default EmotionSadness;