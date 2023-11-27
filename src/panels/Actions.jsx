// В компоненте описаны действия, которые может выбрать пользователь.

import React, { useState } from "react";
import HeaderPanel from "../components/HeaderPanel";
import { DatePanel } from "../components/DatePanel";
import { 
    CellButton,
    Div, 
    Group, 
    Panel,
    Spacing,
    Text
} from "@vkontakte/vkui";
import "../css/Actions.css"
import { Icon24ChevronCompactRight } from "@vkontakte/icons";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";


// Иконки, если пользователь не выбрал действие.
import image_11 from "../img/a1_1.svg";
import image_12 from "../img/a1_2.png";
import image_13 from "../img/a1_3.png";
import image_14 from "../img/a1_4.png";

import image_21 from "../img/a2_1.png";
import image_22 from "../img/a2_2.png";
import image_23 from "../img/a2_3.png";
import image_24 from "../img/a2_4.png";

import image_31 from "../img/a3_1.png";
import image_32 from "../img/a3_2.png";
import image_33 from "../img/a3_3.png";
import image_34 from "../img/a3_4.png";

import image_41 from "../img/a4_1.png";
import image_42 from "../img/a4_2.png";
import image_43 from "../img/a4_3.png";
import image_44 from "../img/a4_4.png";


// Иконки, если пользователь выбрал действие.
import image_a11 from "../img/aa1_1.svg";
import image_a12 from "../img/aa1_2.svg"
import image_a13 from "../img/aa1_3.svg"
import image_a14 from "../img/aa1_4.svg"

import image_a21 from "../img/aa2_1.svg";
import image_a22 from "../img/aa2_2.svg"
import image_a23 from "../img/aa2_3.svg"
import image_a24 from "../img/aa2_4.svg"

import image_a31 from "../img/aa3_1.svg";
import image_a32 from "../img/aa3_2.svg"
import image_a33 from "../img/aa3_3.svg"
import image_a34 from "../img/aa3_4.svg"

import image_a41 from "../img/aa4_1.svg";
import image_a42 from "../img/aa4_2.svg"
import image_a43 from "../img/aa4_3.svg"
import image_a44 from "../img/aa4_4.svg"
import { useDispatch } from "react-redux";
import { addAction } from "../store/setEmotion";
import { useSelector } from "react-redux";

export const Actions = () => {
    const params = useParams();
    const routeNavigator = useRouteNavigator();
    const dispatch = useDispatch();
    const choosenActions = useSelector(state => state.emotion.actions);

    const [isActionSelected1, setIsActionSelected1] = useState(false);
    const [isActionSelected2, setIsActionSelected2] = useState(false);
    const [isActionSelected3, setIsActionSelected3] = useState(false);
    const [isActionSelected4, setIsActionSelected4] = useState(false);

    const [isActionSelected5, setIsActionSelected5] = useState(false);
    const [isActionSelected6, setIsActionSelected6] = useState(false);
    const [isActionSelected7, setIsActionSelected7] = useState(false);
    const [isActionSelected8, setIsActionSelected8] = useState(false);

    const [isActionSelected9, setIsActionSelected9] = useState(false);
    const [isActionSelected10, setIsActionSelected10] = useState(false);
    const [isActionSelected11, setIsActionSelected11] = useState(false);
    const [isActionSelected12, setIsActionSelected12] = useState(false);

    const [isActionSelected13, setIsActionSelected13] = useState(false);
    const [isActionSelected14, setIsActionSelected14] = useState(false);
    const [isActionSelected15, setIsActionSelected15] = useState(false);
    const [isActionSelected16, setIsActionSelected16] = useState(false);

    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />
            <Spacing size={20} />

            <Div className="title_text">
                <Text className="text actions_text">Чем ты занимался на протяжении дня?</Text>
            </Div>

            <Spacing size={20}/>

            <Div className="actions_variations_grid">
                <Div className="action_container action11">
                    <CellButton 
                        onClick={() => {
                            isActionSelected1 ? setIsActionSelected1(false) : setIsActionSelected1(true)
                            dispatch(addAction(image_11))
                        }}
                        className={isActionSelected1 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected1 && (isActionSelected2 || isActionSelected3 || isActionSelected4)}
                    >
                        <img className="action_image" src={!isActionSelected1 ? image_11 : image_a11} alt="" />
                    </CellButton>
                    <Text className="action_discription">семья</Text>
                </Div>

                <Div className="action_container action12">
                    <CellButton 
                        onClick={() => {
                            isActionSelected2 ? setIsActionSelected2(false) : setIsActionSelected2(true)
                            dispatch(addAction(image_12))
                        }}
                        className={isActionSelected2 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected2 && (isActionSelected1 || isActionSelected3 || isActionSelected4)}
                    >
                        <img className="action_image" src={!isActionSelected2 ? image_12 : image_a12} alt="" />
                    </CellButton>
                    <Text className="action_discription">свидание</Text>
                </Div>

                <Div className="action_container action13">
                    <CellButton 
                        onClick={() => {
                            isActionSelected3 ? setIsActionSelected3(false) : setIsActionSelected3(true)
                            dispatch(addAction(image_13))
                        }}
                        className={isActionSelected3 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected3 && (isActionSelected2 || isActionSelected1 || isActionSelected4)}
                    >
                        <img className="action_image" src={!isActionSelected3 ? image_13 : image_a13} alt="" />
                    </CellButton>
                    <Text className="action_discription">друзья</Text>
                </Div>

                <Div className="action_container action14">
                    <CellButton 
                        onClick={() => {
                            isActionSelected4 ? setIsActionSelected4(false) : setIsActionSelected4(true)
                            dispatch(addAction(image_14))
                        }}
                        className={isActionSelected4 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected4 && (isActionSelected2 || isActionSelected3 || isActionSelected1)}
                    >
                        <img className="action_image" src={!isActionSelected4 ? image_14 : image_a14} alt="" />
                    </CellButton>
                    <Text className="action_discription">коллеги</Text>
                </Div>
            </Div>

            <Spacing size={20} />

            <Div className="actions_variations_grid">
                <Div className="action_container action21">
                    <CellButton 
                        onClick={() => {
                            isActionSelected5 ? setIsActionSelected5(false) : setIsActionSelected5(true)
                            dispatch(addAction(image_21))
                        }}
                        className={isActionSelected5 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected5 && (isActionSelected6 || isActionSelected7 || isActionSelected8)}
                    >
                        <img className="action_image" src={!isActionSelected5 ? image_21 : image_a21} alt="" />
                    </CellButton>
                    <Text className="action_discription">хороший сон</Text>
                </Div>

                <Div className="action_container action22">
                <CellButton 
                        onClick={() => {
                            isActionSelected6 ? setIsActionSelected6(false) : setIsActionSelected6(true)
                            dispatch(addAction(image_22))
                        }}
                        className={isActionSelected6 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected6 && (isActionSelected5 || isActionSelected7 || isActionSelected8)}
                    >
                        <img className="action_image" src={!isActionSelected6 ? image_22 : image_a22} alt="" />
                    </CellButton>
                    <Text className="action_discription">плохой сон</Text>
                </Div>

                <Div className="action_container action23">
                    <CellButton 
                        onClick={() => {
                            isActionSelected7 ? setIsActionSelected7(false) : setIsActionSelected7(true)
                            dispatch(addAction(image_23))
                        }}
                        className={isActionSelected7 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected7 && (isActionSelected6 || isActionSelected5 || isActionSelected8)}
                    >
                        <img className="action_image" src={!isActionSelected7 ? image_23 : image_a23} alt="" />
                    </CellButton>
                    <Text className="action_discription action_discription2">рано ложусь</Text>
                </Div>

                <Div className="action_container action24">
                    <CellButton 
                        onClick={() => {
                            isActionSelected8 ? setIsActionSelected8(false) : setIsActionSelected8(true)
                            dispatch(addAction(image_23))
                        }}
                        className={isActionSelected8 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected8 && (isActionSelected6 || isActionSelected7 || isActionSelected5)}
                    >
                        <img className="action_image" src={!isActionSelected8 ? image_24 : image_a24} alt="" />
                    </CellButton>
                    <Text className="action_discription action_discription2">кошмарный сон</Text>
                </Div>
            </Div>

            <Spacing size={20} />

            <Div className="actions_variations_grid">
                <Div className="action_container action31">
                    <CellButton 
                        onClick={() => {
                            isActionSelected9 ? setIsActionSelected9(false) : setIsActionSelected9(true)
                            dispatch(addAction(image_31))
                        }}
                        className={isActionSelected9 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected9 && (isActionSelected10 || isActionSelected11 || isActionSelected12)}
                    >
                        <img className="action_image" src={!isActionSelected9 ? image_31 : image_a31} alt="" />
                    </CellButton>
                    <Text className="action_discription">рисование</Text>
                </Div>

                <Div className="action_container action32">
                    <CellButton 
                        onClick={() => {
                            isActionSelected10 ? setIsActionSelected10(false) : setIsActionSelected10(true)
                            dispatch(addAction(image_32))
                        }}
                        className={isActionSelected10 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected10 && (isActionSelected9 || isActionSelected11 || isActionSelected12)}
                    >
                        <img className="action_image" src={!isActionSelected10 ? image_32 : image_a32} alt="" />
                    </CellButton>
                    <Text className="action_discription">музыка</Text>
                </Div>

                <Div className="action_container action33">
                    <CellButton 
                        onClick={() => {
                            isActionSelected11 ? setIsActionSelected11(false) : setIsActionSelected11(true)
                            dispatch(addAction(image_33))
                        }}
                        className={isActionSelected11 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected11 && (isActionSelected10 || isActionSelected9 || isActionSelected12)}
                    >
                        <img className="action_image" src={!isActionSelected11 ? image_33 : image_a33} alt="" />
                    </CellButton>
                    <Text className="action_discription">танцы</Text>
                </Div>

                <Div className="action_container action34">
                    <CellButton 
                        onClick={() => {
                            isActionSelected12 ? setIsActionSelected12(false) : setIsActionSelected12(true)
                            dispatch(addAction(image_34))
                        }}
                        className={isActionSelected12 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected12 && (isActionSelected10 || isActionSelected11 || isActionSelected9)}
                    >
                        <img className="action_image" src={!isActionSelected12 ? image_34 : image_a34} alt="" />
                    </CellButton>
                    <Text className="action_discription">вязание</Text>
                </Div>
            </Div>

            <Spacing size={20} />

            <Div className="actions_variations_grid ">
                <Div className="action_container action41">
                    <CellButton 
                        onClick={() => {
                            isActionSelected13 ? setIsActionSelected13(false) : setIsActionSelected13(true)
                            dispatch(addAction(image_41))
                        }}
                        className={isActionSelected13 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected13 && (isActionSelected14 || isActionSelected15 || isActionSelected16)}
                    >
                        <img className="action_image" src={!isActionSelected13 ? image_41 : image_a41} alt="" />
                    </CellButton>
                    <Text className="action_discription">солнечно</Text>
                </Div>

                <Div className="action_container action42">
                    <CellButton 
                        onClick={() => {
                            isActionSelected14 ? setIsActionSelected14(false) : setIsActionSelected14(true)
                            dispatch(addAction(image_42))
                        }}
                        className={isActionSelected14 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected14 && (isActionSelected13 || isActionSelected15 || isActionSelected16)}
                    >
                        <img className="action_image" src={!isActionSelected14 ? image_42 : image_a42} alt="" />
                    </CellButton>
                    <Text className="action_discription">снегопад</Text>
                </Div>

                <Div className="action_container action43">
                    <CellButton 
                        onClick={() => {
                            isActionSelected15 ? setIsActionSelected15(false) : setIsActionSelected15(true)
                            dispatch(addAction(image_43))
                        }}
                        className={isActionSelected15 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected15 && (isActionSelected13 || isActionSelected14 || isActionSelected16)}
                    >
                        <img className="action_image" src={!isActionSelected15 ? image_43 : image_a43} alt="" />
                    </CellButton>
                    <Text className="action_discription">дождливо</Text>
                </Div>

                <Div className="action_container action44">
                    <CellButton 
                        onClick={() => {
                            isActionSelected16 ? setIsActionSelected16(false) : setIsActionSelected16(true)
                            dispatch(addAction(image_44))
                        }}
                        className={isActionSelected16 ? "action_cellbutton-active" : "action_cellbutton"}
                        disabled={!isActionSelected16 && (isActionSelected13 || isActionSelected15 || isActionSelected14)}
                    >
                        <img className="action_image" src={!isActionSelected16 ? image_44 : image_a44} alt="" />
                    </CellButton>
                    <Text className="action_discription">облачно</Text>
                </Div>
            </Div>

            <Div className="button_wrapper-actions">
                <CellButton 
                    className="goNext-button"
                    centered
                    onClick={() => {
                        routeNavigator.push(`/emotionDescription/${params.emotionType}`);
                        // dispatch(choosenActions.map(action => addAction(action)));
                    }}
                >
                    <div className="goNext-button_wrapper">
                        <span>Продолжить</span>
                        <Icon24ChevronCompactRight />
                    </div>
                </CellButton>
            </Div>
        </Panel>
    );
}