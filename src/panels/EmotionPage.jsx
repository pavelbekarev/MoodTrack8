import 
{ 
    Panel, 
    Div,
    CellButton,
    Text,
    Group,
    Spacing,
    Cell
} from "@vkontakte/vkui";
import React, { useState } from "react"
import HeaderPanel from "../components/HeaderPanel";
import "../css/EmotionPage.css"
import { Icon24ChevronCompactRight } from '@vkontakte/icons';
import { Icon24ChevronCompactLeft } from '@vkontakte/icons';

import frame20 from "../img/Frame 20.svg";
import frame21 from "../img/Frame 21.svg";
import frame22 from "../img/Frame 22.svg";
import frame23 from "../img/Frame 23.svg";
import frame24 from "../img/Frame 24.svg";

const EmotionPage = () => {
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

    const [frame20Flag, setFrame20Flag] = useState(false);
    const [frame21Flag, setFrame21Flag] = useState(false);
    const [frame22Flag, setFrame22Flag] = useState(false);
    const [frame23Flag, setFrame23Flag] = useState(false);
    const [frame24Flag, setFrame24Flag] = useState(false);
    const [currentDay, setCurrentDay] = useState(currentDate.getDate());
    const [currentMonth, setCurrentMonth] = useState(month[currentDate.getMonth() + 1]);
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());


    // let currentDay = currentDate.getDate();
    // let currentMonth = currentDate.getMonth();
    // let currentMonth = month[currentDate.getMonth() + 1];
    // let currentYear = currentDate.getFullYear();
    
    currentDate = `${currentDay} ${currentMonth}, ${currentYear}`

    function goToNextDay() {
        if (parseInt(currentDate.getDate() + 1) === 30 && (parseInt(currentDate.getMonth() + 1) === 4 || parseInt(currentDate.getMonth() + 1) === 6 || parseInt(currentDate.getMonth() + 1) === 9 || parseInt(currentDate.getMonth() + 1) === 11) || parseInt(currentDate.getMonth() + 1) === 28) {
            setCurrentMonth(month[currentDate.getMonth() + 1]);
            setCurrentDay(1);
        }

        else {
            setCurrentDay(currentDate.getDay() + 1);
        }
    }

    function goToPrevDay() {

    }

    function setEmotion() {

    }


    return (
        <Panel>
            <HeaderPanel />
            <Group className="dateLayout_wrapper">
                <Div className="dateLayout">
                    <CellButton onClick={goToPrevDay} centered className="nextButton cellButton"><Icon24ChevronCompactLeft className="cellButtonIcon" style={{width: 16, height:24}}/></CellButton>
                    <Text className="textLayout">{currentDate}</Text>
                    <CellButton onClick={goToNextDay} centered className="prevButton cellButton"><Icon24ChevronCompactRight className="cellButtonIcon" style={{width: 16, height:24}}/></CellButton>
                </Div>
            </Group>
            <Spacing size={170}/>
            <div className="text-chooseEmotion_wrapper">
                <Text className="text-chooseEmotion">Выбери свою эмоцию!</Text>
            </div>

            <Spacing size={70}/>

            <Div className="emotions__wrapper">
                <Cell onClick={() => {
                    setFrame20Flag(true);
                    setEmotion();
                }} id="frame20">
                    <div className="cell">
                        <img src={frame20} alt="" />
                        {frame20Flag && <span className="emotionText20">Радость</span>}
                    </div>
                </Cell>
                <Cell onClick={() => {
                    setFrame24Flag(true);
                    setEmotion();
                }} id="frame24">
                    <div className="cell">
                        <img src={frame24} alt="" />
                        {frame24Flag && <span className="emotionText24">Злость</span>}
                    </div>
                </Cell>
                <Cell onClick={() => {
                    setFrame21Flag(true);
                    setEmotion();
                }} id="frame21" src={frame21}>
                    <div className="cell">
                        <img src={frame21} alt="" />
                        {frame21Flag && <span className="emotionText21">Грусть</span>}
                    </div>
                </Cell>
                <Cell onClick={() => {
                    setFrame22Flag(true);
                    setEmotion();
                }} id="frame22">
                    <div className="cell">
                        <img src={frame22} alt="" />
                        {frame22Flag && <span className="emotionText22">Удивление</span>}
                    </div>
                </Cell>
                <Cell onClick={() => {
                    setFrame23Flag(true);
                    setEmotion();
                }} id="frame23">
                    <div className="cell">
                        <img src={frame23} alt="" />
                        {frame23Flag && <span className="emotionText23">Неприязнь</span>}
                    </div>
                </Cell>
            </Div>

        </Panel>
    );
}

export default EmotionPage;