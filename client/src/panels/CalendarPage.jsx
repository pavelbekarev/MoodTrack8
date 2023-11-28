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
    Cell,
    ModalPage,
    ModalPageHeader
} from "@vkontakte/vkui";
import "../css/EmotionPage.css";

import { Icon24ChevronCompactRight } from '@vkontakte/icons';
import HeaderPanel from "../components/HeaderPanel";
import "@vkontakte/vkui/dist/cssm/components/CalendarDay/CalendarDay";
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { EmotionsModal } from "../components/EmotionsModal";


const CalendarPage = (props) => {
    const [dateValue, setDateValue] = useState(() => new Date()); // выбранная дата 
    const [currentDate, setCurrentDate] = useState(() => new Date());
    const routeNavigator = useRouteNavigator();
    const [activeModal, setActiveModal] = useState(null);
    const changeActiveModal = props.changeActiveModal;

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
                    <FormLayoutGroup className="calendar_wrapper">
                        <FormItem>
                            <LocaleProvider>
                                <Calendar 
                                    className="calendar" 
                                    value={dateValue} 
                                    onChange={setDateValue}
                                    onClick={() => {
                                        checkDate()
                                        &&
                                        changeActiveModal("EMOTIONS_MODAL_PAGE")
                                    }}
                                />
                            </LocaleProvider>

                        </FormItem>
                        <FormItem className="dayInfo-wrapper">
                                
                            {
                                // currentDate.toLocaleDateString() && dateValue.toLocaleDateString()
                                // ?
                                // <Div>
                                //     <Text>{dateValue.toLocaleDateString()}</Text>
                                //     <br/>
                                //     <Text>{currentDate.toLocaleDateString()}</Text>
                                // </Div>
                                // :
                                // <Text>Nothing</Text>

                                // <Div className="emotions_wrapper">
                                //     <Cell 
                                //         id="frame20"
                                //     >
                                //         <img className="cell_img" src={frame20} alt="" />
                                //     </Cell>
                                //     <Cell 
                                //         id="frame24"
                                //     >
                                //         <img className="cell_img" src={frame24} alt="" />
                                //     </Cell>
                                //     <Cell 
                                //         id="frame21"
                                //     >
                                //         <div className="cell">
                                //             <img className="cell_img" src={frame21} alt="" />
                                //         </div>
                                //     </Cell>
                                //     <Cell 
                                //         id="frame22"
                                //     >
                                //         <div className="cell">
                                //             <img className="cell_img" src={frame22} alt="" />
                                //         </div>
                                //     </Cell>
                                //     <Cell 
                                //         id="frame23"
                                //     >
                                //         <div className="cell">
                                //             <img className="cell_img" src={frame23} alt="" />
                                //         </div>
                                //     </Cell>
                                // </Div>
                            }
                        </FormItem>
                        {/* <FormItem className="dayInfo-wrapper">
                            {
                                new Date().toLocaleDateString() === dateValue.toLocaleDateString()
                                && 
                                <div className="dayInfo-container">
                                    <Text 
                                        className="dayInfo-text"
                                    >
                                        Сегодня {dateValue.toLocaleDateString()}, пора записать свои эмоции!
                                    </Text>
                                    <button 
                                        onClick={() => {routeNavigator.push("/emotions")}} 
                                        className="dayInfo-button"
                                    >
                                        Продолжить 
                                        <Icon24ChevronCompactRight 
                                            style={{width: 16, height:24}}
                                        />
                                    </button>
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
                        </FormItem> */}
                    </FormLayoutGroup>
                </FormLayout>
            </Div>
        </Panel>
    );
}

export default CalendarPage;