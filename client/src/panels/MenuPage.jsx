import { 
    Panel ,
    Card,
    CardGrid,
    Header,
    Group,
    Text,
    Spacing,
    Div,
} from "@vkontakte/vkui";
import React, { useState } from "react";
import HeaderPanel from "../components/HeaderPanel";
import {DatePanel} from "../components/DatePanel"
import "../css/MenuPage.css"
import { useSelector } from "react-redux";

const MenuPage = () => {
    const emotions = useSelector(state => state.emotion.emotions)
    const emotionImage = useSelector(state => state.emotion.emotionImage);
    const sliderValue = useSelector(state => state.emotion.sliderValue);
    const date = useSelector(state => state.emotion.date)
    const actions = useSelector(state => state.emotion.actions).map(action => <img className={`action ${styleCss}`} src={action} alt="Действие"/>)
    const emotionText = useSelector(state => state.emotion.emotionText)


    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />
            <Spacing size={40} />

            <Group 
                className="card_wrapper"
                mode="plain" 
                header={<Header className="cardHeader">С внешней тенью</Header>}
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
                                <Text className={`text-info ${styleCss}`}>{emotions.map(e => `${e.toLowerCase()}`)}</Text>
                                <Text className={`actions-info ${styleCss}`} >{actions}</Text>
                                <Text className={`emotion-text ${styleCss}`} >{emotionText}</Text>
                            </Div>
                        </Div>
                    </Card>
                </CardGrid>
            </Group>
        </Panel>
    );
}

export default MenuPage;