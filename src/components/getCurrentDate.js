import React from "react";
import { useState } from "react";

class GetDate {
    getCurrentDate = () => {
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
        
        currentDate = `${currentDay} ${currentMonth}, ${currentYear}`

        return currentDate;
    }
}

export default GetDate;