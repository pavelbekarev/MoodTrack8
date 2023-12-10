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
    // const [emotionImage, setEmotionImage] = useState();
    const [emotionType, setEmotionType] = useState("");
    const [sliderValue, setSliderValue] = useState(0);
    const [date, setDate] = useState("");
    const [actions, setActions] = useState([]);
    const [emotionText, setEmotionText]= useState("")
    const [intensivity_name, setIntensivityName] = useState("");
    let emotionImage = "";
    // const [notes, setNotes] = useState([]);

    // const [best, setBest] = useState([]);
    // const notes = JSON.stringify(useSelector(state => state.emotion.notes));

    
    // const best = notes.map(note => note.intensivity_name === ("очень сильно" + " ") ? 
    //                     {date_value: note.date_value, 
    //                     emotion_name: note.emotionType, 
    //                     emotions: note.emotions,
    //                     action_name: note.action_name, 
    //                     intensivity_name: note.intensivity_name, 
    //                     thoughts_name: note.thoughts_name}
    //     : null
    // )

    // const best = notes.map(note => note.intensivity_name === ("очень сильно" + " ") ? 
    //                     (setDate(note.date_value),
    //                     setEmotionType(note.emotionType),
    //                     setEmotions(note.emotions),
    //                     setActions(note.action_name), 
    //                     setIntensivityName(note.intensivity_name), 
    //                     setEmotionText(note.thoughts_name))
    //     : null
    // )

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes());
        // setBestNote(getBest())
        // setNotes(useSelector(state => state.emotion.notes))

    }, [])


    const emotionIntensivityList = {
        0: "",
        1: "очень слабо",
        2: "слабо",
        3: "умеренно",
        4: "сильно",
        5: "очень сильно"
    }


    const notes = useSelector(state => state.emotion.notes);    

    // let emotionType = "";
    // if (emotionImage === frame20) {
    //     emotionType = "Счастье";
    //     styleCss = "happy";
    // }

    // if (emotionImage === frame24) {
    //     emotionType = "Агрессия";
    //     styleCss = "anger";
    // }

    // if (emotionImage === frame21) {
    //     emotionType = "Грусть";
    //     styleCss = "sadness";
    // }

    // if (emotionImage === frame22) {
    //     emotionType = "Удивление";
    //     styleCss = "surprise";
    // }

    // if (emotionImage === frame23) {
    //     emotionType = "Неприязнь";
    //     styleCss = "dislike";
    // }


    // const asd = getBest();

    // const dsa = () => {
    //     let asd = (note => 
    //         {(note.intensivity_name === "умеренно") &&
                
    //             setDate(note.date_value),
    //             setEmotionType(note.emotionType),
    //             setEmotions(note.emotions),
    //             setActions(note.action_name), 
    //             setIntensivityName(note.intensivity_name), 
    //             setEmotionText(note.thoughts_name)
    //     })

    //     return asd;
    // }


    const cars = [
        { make: 'Toyota', model: 'Camry', year: 2018 },
        { make: 'Honda', model: 'Accord', year: 2019 },
        { make: 'Tesla', model: 'Model S', year: 2020 },
    ];
    
    const car = cars.find(function (item) {
        return item.make === 'Honda';
    });
    
    // console.log(car);


    // const best = notes.map(function (item) {
    //     const bestList = [];

    //     if ((item.emotion_name === "Счастье") && (item.intensivity_name === "очень сильно"))
    //     {
    //         return item;
    //     }

    //     else {
    //         return false;
    //     }
    // }
    // );

    // console.log(_.sample(best));

    // if (best.emotion_name === "happy") {
    //     emotionImage = frame20;
    // }

    // if (best.emotion_name === "anger") {
    //     emotionImage = frame24;
    // }

    // if (best.emotion_name === "sadness") {
    //     emotionImage = frame21;
    // }

    // if (best.emotion_name === "surprise") {
    //     emotionImage = frame22;
    // }

    // if (best.emotion_name === "dislike") {
    //     emotionImage = frame23;
    // }

    // console.log(best);

    // let newList = best.filter(item => item !== false)
    // // console.log(newList)

    // // console.log(_.sample(newList))

    // const candidateNote = _.sample(newList);
    // console.log(candidateNote);


    const best = notes.map(function (item) {
        const bestList = [];

        if ((item.emotion_name === "Счастье") && (item.intensivity_name === "очень сильно"))
        {
            bestList.push(item);
        }

        else {
            return false;   
        }

        return bestList;
    }
    );

    // console.log(best.filter(item => item !== false));
    let newList = best.filter(item => item !== false);
    const candidateNote = _.sample(newList);
    console.log(candidateNote);

    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />
            <Spacing size={40} />

            <Div>
                <Group 
                    className="card_wrapper"
                    mode="plain" 
                    // header={<Header className="cardHeader">Самый лучший день - {candidateNote.date_value}</Header>}
                >
                    <CardGrid className="cardGrid" size="l">
                        <Card className="card" mode="shadow">
                            <Div className="cardContent_wrapper">
                                <Div className="image_wrapper">
                                    <img className="emotionImage" src={emotionImage} alt="" />
                                </Div>
                                <Div className="info_wrapper">
                                    {/* <Text className={`emotionType-info ${styleCss}`} >{`${candidateNote.emotion_name}, интенсивность: ${candidateNote.intensivity_name}`}</Text>
                                    <Text className={`text-info ${styleCss}`}>{emotions.map(e => `${e}`)}</Text>
                                    <Text className={`actions-info ${styleCss}`} >{actions}</Text>
                                    <Text className={`emotion-text ${styleCss}`} >{candidateNote.thoughts_name}</Text> */}
                                </Div>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
            </Div>
            

            <Spacing size={90} />

            <Text>
                {/* {JSON.stringify(notes.map(note => note.thoughts_name === "Запись третья" && (
                    setDate(note.date_value),
                    setEmotionType(note.emotionType),
                    setEmotions(note.emotions),
                    setActions(note.action_name), 
                    setIntensivityName(note.intensivity_name), 
                    setEmotionText(note.thoughts_name)

                )))} */}

                {/* {notes.map(note => note.intensivity_name)} */}
                {/* {best} */}
                {/* {notes} */}
                {/* {asd()} */}
            </Text>
        </Panel>
    );
}

export default MenuPage;