import { 
    Group,
    Div,
    Text,
    Separator,
    Spacing
} from "@vkontakte/vkui";
import React, {useState} from "react";
import "../css/Emotions.css";
import "../css/EmotionPage.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDate } from "../store/setEmotion";

export const DatePanel = () => {
    const dispatch = useDispatch();
    
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

    let currentDateWOYear = `${currentDay} ${currentMonth}`;

    useEffect(() => {
        dispatch(setDate(currentDateWOYear));
    }, [currentDate])

    return (
        <>
            <Group className="dateLayout_wrapper">
                <Div className="dateLayout">
                    <Text className="textLayout">{currentDate}</Text>
                </Div>
            </Group>
            <Spacing size={16} />
            <Separator />
        </>
    );
}