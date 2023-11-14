// import { 
//     Panel,
//     Group,
//     Div,
//     CellButton,
//     Text,
//     Separator,
//     Spacing
// } from "@vkontakte/vkui";
// import { Icon24ChevronCompactLeft } from "@vkontakte/icons";
// import { Icon24ChevronCompactRight } from "@vkontakte/icons";
// import React, {useState} from "react"
// import HeaderPanel from "../../components/HeaderPanel";
// import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
// import "../../css/Emotions.css";

// const EmotionHappy = () => {
//     const routeNavigator = useRouteNavigator();

//     let currentDate = new Date();

//     const month = {
//         1: "января",
//         2: "февраля",
//         3: "марта",
//         4: "апреля",
//         5: "мая",
//         6: "июня",
//         7: "июля",
//         8: "августа",
//         9: "сентября",
//         10: "октября",
//         11: "ноября",
//         12: "декабря"
//     }

//     const [currentDay, setCurrentDay] = useState(currentDate.getDate());
//     const [currentMonth, setCurrentMonth] = useState(month[currentDate.getMonth() + 1]);
//     const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

//     currentDate = `${currentDay} ${currentMonth}, ${currentYear}`

//     return (
//         <Panel>
//             <HeaderPanel />
//             <Group className="dateLayout_wrapper">
//                 <Div className="dateLayout">
//                     <Text className="textLayout">{currentDate}</Text>
//                 </Div>
//             </Group>
//             <Separator />

//             <Spacing size={77}/>

//             <Div className="title_text">
//                 <span className="text">Давай уточним, что ты еще испытал</span>
//             </Div>

//             <Div className="list_wrapper">
//                 <Div className="cellbuttons_row">
//                     <CellButton centered className="cellbutton_wrapper">
//                         Умиротворение
//                     </CellButton>
//                     <CellButton centered className="cellbutton_wrapper">Веселье</CellButton>
//                     <CellButton centered className="cellbutton_wrapper">Удовлетворение</CellButton>
//                     <CellButton centered className="cellbutton_wrapper">Счастье</CellButton>
//                 </Div>
//                 <Div className="cellbuttons_row">
//                     <CellButton centered className="cellbutton_wrapper">Храбрость</CellButton>
//                     <CellButton centered className="cellbutton_wrapper">Гордость</CellButton>
//                     <CellButton centered className="cellbutton_wrapper">Оптимизм</CellButton>
//                     <CellButton centered className="cellbutton_wrapper">Любопытство</CellButton>
//                 </Div>
//             </Div>

//             <Div className="button_wrapper">
//                     <CellButton 
//                         className="goNext-button" 
//                         centered
//                         onClick={() => routeNavigator.push("/emotionIntensivity/:happy")}
//                     >
//                             Продолжить
//                         </CellButton>
//                 </Div>

            
//         </Panel>
//     );
// }


// export default EmotionHappy;


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

const EmotionHappy = () => {
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
                            dispatch({type : "addEmotion", payload : "Умиротворение"});
                            isEmotionChoose1 ? setIsEmotionChoose1(false) : setIsEmotionChoose1(true)
                        }}
                    >
                        Умиротворение
                    </CellButton>
                    <CellButton 
                        id="cellbutton2"
                        centered 
                        className={isEmotionChoose2 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch({type : "addEmotion", payload : "Веселье"});
                            isEmotionChoose2 ? setIsEmotionChoose2(false) : setIsEmotionChoose2(true)
                        }}
                    >
                        Веселье
                    </CellButton>
                    <CellButton 
                        id="cellbutton3"
                        centered 
                        className={isEmotionChoose3 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch({type : "addEmotion", payload : "Удовлетворение"});
                            isEmotionChoose3 ? setIsEmotionChoose3(false) : setIsEmotionChoose3(true)
                        }}
                    >
                        Удовлетворение
                    </CellButton>
                    <CellButton 
                        id="cellbutton4"
                        centered 
                        className={isEmotionChoose4 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch({type : "addEmotion", payload : "Счастье"});
                            isEmotionChoose4 ? setIsEmotionChoose4(false) : setIsEmotionChoose4(true)
                        }}
                    >
                        Счастье
                    </CellButton>
                </Div>
                <Div className="cellbuttons_row">
                    <CellButton 
                        id="cellbutton5"
                        centered 
                        className={isEmotionChoose5 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch({type : "addEmotion", payload : "Храбрость"});
                            isEmotionChoose5 ? setIsEmotionChoose5(false) : setIsEmotionChoose5(true)
                        }}
                    >
                        Храбрость
                    </CellButton>
                    <CellButton 
                        id="cellbutton6"
                        centered 
                        className={isEmotionChoose6 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch({type : "addEmotion", payload : "Гордость"});
                            isEmotionChoose6 ? setIsEmotionChoose6(false) : setIsEmotionChoose6(true)
                        }}
                    >
                        Гордость
                    </CellButton>
                    <CellButton 
                        id="cellbutton7"
                        centered 
                        className={isEmotionChoose7 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch({type : "addEmotion", payload : "Оптимизм"});
                            isEmotionChoose7 ? setIsEmotionChoose7(false) : setIsEmotionChoose7(true)
                        }}
                    >
                        Оптимизм
                    </CellButton>
                    <CellButton 
                        id="cellbutton8"
                        centered 
                        className={isEmotionChoose8 ? "cellbutton_wrapper-active" : "cellbutton_wrapper"} 
                        onClick={() => {
                            dispatch({type : "addEmotion", payload : "Любопытство"});
                            isEmotionChoose8 ? setIsEmotionChoose8(false) : setIsEmotionChoose8(true)
                        }}
                    >
                        Любопытство
                    </CellButton>
                </Div>
            </Div>

            <Spacing size={50} />

            <Div className="button_wrapper">
                <CellButton
                    className="save-button" 
                    centered
                    onClick={() => routeNavigator.push(`/emotionIntensivity/:happy`)}
                >
                    Сохранить выбор
                </CellButton>
            </Div>

            
        </Panel>
    );
}


export default EmotionHappy;