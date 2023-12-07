import { 
    Panel,
    Card,
    CardGrid,
    Header,
    Group,
    Text,
    Spacing,
    Div
} from "@vkontakte/vkui";
import React, { useState, useEffect } from "react";
import HeaderPanel from "../components/HeaderPanel";
import {DatePanel} from "../components/DatePanel"
import "../css/MenuPage.css"
import { useSelector, useDispatch } from "react-redux";
import frame20 from "../img/Frame20.svg";
import frame21 from "../img/Frame21.svg";
import frame22 from "../img/Frame22.svg";
import frame23 from "../img/Frame23.svg";
import frame24 from "../img/Frame24.svg";
import { getNotes } from "../actions/note";
import _ from "lodash";

const MenuPage = () => {
    let styleCss = "";

    // const emotions = useSelector(state => state.emotion.emotions)
    // const emotionImage = useSelector(state => state.emotion.emotionImage);
    // const sliderValue = useSelector(state => state.emotion.sliderValue);
    // const date = useSelector(state => state.emotion.date)
    // const actions = useSelector(state => state.emotion.actions).map(action => <img className={`action ${styleCss}`} src={action} alt="Действие"/>)
    // const emotionText = useSelector(state => state.emotion.emotionText);
    const [bestNote, setBestNote] = useState();

    const [emotions, setEmotions] = useState([]);
    const [emotionImage, setEmotionImage] = useState("");
    const [sliderValue, setSliderValue] = useState(0);
    const [date, setDate] = useState("");
    const [actions, setActions] = useState([]);
    const [emotionText, setEmotionText]= useState("")

    // const [best, setBest] = useState([]);
    const notes = useSelector(state => state.emotion.notes);

    
    const best = notes.map(note => note.intensivity_name === "очень сильно" ? 
                        {date_value: note.date_value, 
                        emotion_name: note.emotionType, 
                        emotions: note.emotions,
                        action_name: note.action_name, 
                        intensivity_name: note.intensivity_name, 
                        thoughts_name: note.thoughts_name}
        : null
    )

    const getBest = () => {
        if (null) {
            return ;
        }

        const list = best.filter(item => item !== null)
        

        return JSON.stringify(_.sample(list));

    }

    const asd = getBest();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes());
        setBestNote(getBest())

    }, [dispatch])


    const emotionIntensivityList = {
        0: "",
        1: "очень слабо",
        2: "слабо",
        3: "умеренно",
        4: "сильно",
        5: "очень сильно"
    }

    let emotionType = "";
    if (emotionImage === frame20) {
        emotionType = "Счастье";
        styleCss = "happy";
    }

    if (emotionImage === frame24) {
        emotionType = "Агрессия";
        styleCss = "anger";
    }

    if (emotionImage === frame21) {
        emotionType = "Грусть";
        styleCss = "sadness";
    }

    if (emotionImage === frame22) {
        emotionType = "Удивление";
        styleCss = "surprise";
    }

    if (emotionImage === frame23) {
        emotionType = "Неприязнь";
        styleCss = "dislike";
    }

    const setNote = () => {
        const noteList = (notes.map(note => note.intensivity_name === "очень сильно") + "").filter((item) => (item === true));
        // const note = noteList.filter((item) => (item === true));
        return _.sample(noteList);
    }

    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />
            <Spacing size={40} />


            <Group 
                className="card_wrapper"
                mode="plain" 
                header={<Header className="cardHeader">Самый лучший день - {date}</Header>}
            >
                <CardGrid className="cardGrid" size="l">
                    <Card className="card" mode="shadow">
                        <Div className="cardContent_wrapper">
                            <Div className="image_wrapper">
                                <img className="emotionImage" src={emotionImage} alt="" />
                            </Div>
                            <Div className="info_wrapper">
                                <Text className={`date-info`} >{`Сегодня, ${date}`}</Text>
                                <Text className={`emotionType-info ${styleCss}`} >{`${emotionType}, интенсивность: ${emotionIntensivityList[sliderValue]}`}</Text>
                                <Text className={`text-info ${styleCss}`}>{emotions.map(e => `${e}`)}</Text>
                                <Text className={`actions-info ${styleCss}`} >{actions}</Text>
                                <Text className={`emotion-text ${styleCss}`} >{emotionText}</Text>
                            </Div>
                        </Div>
                    </Card>
                </CardGrid>
            </Group>

            <Spacing size={90} />

            <Text>
                {
                    
                }
            </Text>

            {/* {asd} */}
            {/* {JSON.stringify(_.sample(best))} */}

        </Panel>
    );
}

export default MenuPage;