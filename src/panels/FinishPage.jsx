import { 
    Panel, 
    Spacing,
    Div,
    Text
} from "@vkontakte/vkui";
import React, { useState } from "react";
import HeaderPanel from "../components/HeaderPanel";
import { DatePanel } from "../components/DatePanel";
import "../css/FinishPage.css";

const FinishPage = () => {


    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />

            <Spacing size={20} />

            <Div className="title_text">
                <Text className="text">
                    Отлично!<br />
                    Продолжай записывать свои эмоции и твой дневник наполнится озарениями.
                </Text>
            </Div>

            <Div className="result_wrapper">
                <Div className="image_wrapper">
                    as
                </Div>
                <Div className="info_wrapper">
                    ds
                </Div>
            </Div>
        </Panel>
    );
}

export default FinishPage;