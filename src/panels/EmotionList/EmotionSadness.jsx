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

const EmotionSadness = () => {
    const routeNavigator = useRouteNavigator();
    const dispatch = useDispatch();

    const [isEmotionChoose1, setIsEmotionChoose1] = useState(false);
    const [isEmotionChoose2, setIsEmotionChoose2] = useState(false);
    const [isEmotionChoose3, setIsEmotionChoose3] = useState(false);
    const [isEmotionChoose4, setIsEmotionChoose4] = useState(false);
    const [isEmotionChoose5, setIsEmotionChoose5] = useState(false);
    const [isEmotionChoose6, setIsEmotionChoose6] = useState(false);
    const [isEmotionChoose7, setIsEmotionChoose7] = useState(false);
    const [isEmotionChoose8, setIsEmotionChoose8] = useState(false);


    let cellbutton = document.getElementById("cellbutton");

    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />

            <Spacing size={77}/>

            <Div className="title_text">
                <span className="text">Давай уточним, что ты еще испытал</span>
            </Div>

            <Div className="list_wrapper">
                <Div className="cellbuttons_row">
                    <CellButton
                        id="cellbutton1"
                        centered 
                        className={isEmotionChoose1 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch({type : "addEmotion", payload : "Апатия"});
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
                            dispatch({type : "addEmotion", payload : "Отчаяние"});
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
                            dispatch({type : "addEmotion", payload : "Потерянность"});
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
                            dispatch({type : "addEmotion", payload : "Подавленность"});
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
                            dispatch({type : "addEmotion", payload : "Одиночество"});
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
                            dispatch({type : "addEmotion", payload : "Стыд"});
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
                            dispatch({type : "addEmotion", payload : "Печаль"});
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
                            dispatch({type : "addEmotion", payload : "Вялость"});
                            isEmotionChoose8 ? setIsEmotionChoose8(false) : setIsEmotionChoose8(true)
                        }}
                    >
                        Вялость
                    </CellButton>
                </Div>
            </Div>

            <Spacing size={50} />

            <Div className="button_wrapper">
                <CellButton
                    className="save-button" 
                    centered
                    onClick={() => routeNavigator.push(`/emotionIntensivity/:sadness`)}
                >
                    Сохранить выбор
                </CellButton>
            </Div>

            
        </Panel>
    );
}


export default EmotionSadness;