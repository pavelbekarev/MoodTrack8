import React, { useEffect, useState } from "react";
import { 
    Panel, 
    Div, 
    FormLayout,
    FormLayoutGroup,
    FormItem,
    Calendar,
    LocaleProvider,
    Spacing,
    Text,
    Button
} from "@vkontakte/vkui";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';

import { Icon20FilterOutline } from '@vkontakte/icons';
import { Icon24ChevronCompactRight } from '@vkontakte/icons';
import "../css/MainPage.css";
import HeaderPanel from "../components/HeaderPanel";
import "@vkontakte/vkui/dist/cssm/components/CalendarDay/CalendarDay";
import { CalendarDay } from "@vkontakte/vkui/dist/components/CalendarDay/CalendarDay";
import { CalendarDays } from "@vkontakte/vkui/dist/components/CalendarDays/CalendarDays";


const CalendarPage = () => {
    const [dateValue, setDateValue] = useState(() => new Date()); // выбранная дата 
    const [enableTime, setEnableTime] = useState(false);
    const [disablePast, setDisablePast] = useState(false);
    const [disableFuture, setDisableFuture] = useState(false);
    const [disablePickers, setDisablePickers] = useState(false);
    const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
    const [locale, setLocale] = useState('ru');
    const [size, setSize] = useState('m');
    const [listenDayChangesForUpdate, setListenDayChangesForUpdate] = useState(true);
    const [currentDate, setCurrentDate] = useState(() => new Date());



    // vars of choosing dates
    let dateDay = dateValue.getDate();
    let dateMonth = dateValue.getMonth();
    let dateYear = dateValue.getYear();

    // vars of current date
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getYear();

    let lessDate = false;
    let moreDate = false;
    let isEven = false;



    useEffect(() => {
        setCurrentDate(() => new Date())
    }, [dateValue]);


    function checkDate() {
        if (dateYear === currentYear) 
        {
            if (dateMonth === currentMonth) 
            {
                if (dateDay === currentDay) 
                {
                    isEven = true;
                    return;
                }
            }

            if (dateMonth > currentMonth) 
            {
                moreDate = true;
                return moreDate;
            }

            if (dateMonth === currentMonth) 
            {
                if (dateDay > currentDay) 
                {
                    moreDate = true;
                    return moreDate;
                }

                else 
                {
                    lessDate = true;
                    return false;
                }
            }
            
            else 
            {
                lessDate = true;
                return false;
            }
        }

        if (dateYear > currentYear) 
        {
            moreDate = true;
            return moreDate;
        } 

        if (dateYear < currentYear) 
        {
            lessDate = true;
            return false;
        }
    }


    return (
        <Panel>
            <HeaderPanel />
            <Spacing size={50} />
            <Div className="calendar__wrapper">
                <FormLayout>
                    <FormLayoutGroup>
                        <FormItem>
                            <LocaleProvider>
                                <Calendar className="calendar" value={dateValue} onChange={setDateValue}/>
                            </LocaleProvider>
                        </FormItem>
                        <FormItem className="dayInfo-wrapper">
                            {
                                new Date().toLocaleDateString() === dateValue.toLocaleDateString()
                                && 
                                <div className="dayInfo-container">
                                    <Text className="dayInfo-text">Сегодня {dateValue.toLocaleDateString()}, пора записать свои эмоции!</Text>
                                    <button onClick={""} className="dayInfo-button">Продолжить <Icon24ChevronCompactRight style={{width: 16, height:24}}/></button>
                                </div>
                            }

                            {
                                !isEven && checkDate()
                                &&
                                <div className="dayInfo-container">
                                    <Text className="dayInfo-text">Этот день еще не наступил!</Text>
                                </div>
                            }

                            {
                                !isEven && !checkDate()
                                &&
                                <div className="dayInfo-container">
                                    <Text className="dayInfo-text">Этот день уже прошел!</Text>
                                </div>
                            }
                        </FormItem>
                    </FormLayoutGroup>
                </FormLayout>
            </Div>

        </Panel>
    );
}

export default CalendarPage;