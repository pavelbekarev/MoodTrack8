import { 
    Panel,
    Snackbar, 
    Spacing,
    Text,
    Div,
    Banner,
    Group,
    Button,
    CellButton,
    Link
} from "@vkontakte/vkui";
import React, {useState} from "react";
import HeaderPanel from "../components/HeaderPanel";
import "../css/ArticlePage.css"
import { Icon24CheckCircleOn } from "@vkontakte/icons";
import { useSelector } from "react-redux";
import frame20 from "../img/Frame20.svg";
import frame21 from "../img/Frame21.svg";
import frame22 from "../img/Frame22.svg";
import frame23 from "../img/Frame23.svg";
import frame24 from "../img/Frame24.svg";
import { useEffect } from "react";
import _ from "lodash";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useDispatch } from "react-redux";
import { clearData } from "../store/setEmotion";
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Icon24ChevronCompactLeft } from "@vkontakte/icons";
    

const ArticlePage = () => {
    const saved = useSelector(state => state.emotion.isSaved);
    const emotionType = useSelector(state => state.emotion.emotionImage);
    const [snackbar, setSnackbar] = useState(null);
    const [headerText, setHeaderText] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [articleUrl, setArticleUrl] = useState("");

    const [headerText2, setHeaderText2] = useState("");
    const [subtitle2, setSubtitle2] = useState("");
    const [articleUrl2, setArticleUrl2] = useState("");
    const [article2, setArticle2] = useState(null);
    const routeNavigator = useRouteNavigator();
    const dispatch = useDispatch();
    const { panel: activePanel } = useActiveVkuiLocation();
    const [showSnackbar, setShowSnackbar] = useState(false);


    let type = "";

    if (emotionType === frame20) {
        type = "happy";
    }

    if (emotionType === frame24) {
        type = "anger";

    }

    if (emotionType === frame21) {
        type = "sadness";
    }

    if (emotionType === frame22) {
        type = "surprise";
    }

    if (emotionType === frame23) {
        type = "dislike";
    }


    const asd = () => {
        if (snackbar) return;
        setSnackbar(
        <Snackbar
            onClose={() => setSnackbar(null)}
            before={<Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />}
        >
            Не удалось применить изменения
        </Snackbar>
        );
    }

    const setArticle = () => {
        if (type === null) return;
        const articles = require("../store/data.json").filter((item) => (item.type === type));
        return _.sample(articles);
    }

    useEffect(() => {
        if (activePanel === "articlePage_panel") {
            let a = setArticle(); 
            let b = setArticle();
            setShowSnackbar(true);

            if (a.header !== b.header) {
                setHeaderText(a.header); 
                setSubtitle(a.subtitle);
                setArticleUrl(a.url);

                setHeaderText2(b.header); 
                setSubtitle2(b.subtitle);
                setArticleUrl2(b.url);
            }

            else {
                setHeaderText(a.header); 
                setSubtitle(a.subtitle);
                setArticleUrl(a.url);

                setHeaderText2(setArticle().header); 
                setSubtitle2(setArticle().subtitle);
                setArticleUrl2(setArticle().url);
            }
        }
    }, [activePanel])


    return (
        <Panel>
            {
                showSnackbar && 
                <Snackbar className="snackBar">
                    Запись сохранена
                </Snackbar>
            }
            
            <HeaderPanel />
            <Spacing size={96} />

            <Div className="title_text">
                <Text className="text article_text">
                    Для вас подобраны статьи!
                </Text>
            </Div>
            
            <Spacing size={60} />

           

            {/* {activePanel === "articlePage_panel" ? () => {let a = setArticle(); setHeaderText(a.header); setSubtitle(a.subtitle)} : ""} */}

            <Div className="banner_wrapper">
                <Banner 
                    className="banner" 
                    header={headerText}
                    subheader={subtitle}
                    asideMode="dismiss" 
                    actions={
                        <Div 
                            className="goByLink_button-wrapper"
                        >
                            <a 
                                className="goByLink_button" 
                                href={articleUrl} 
                                target="_blank"
                            >
                                Перейти
                            </a>
                        </Div>
                    }
                />
                <Banner 
                    className="banner" 
                    header={headerText2}
                    subheader={subtitle2}
                    asideMode="dismiss" 
                    actions={
                        <Div 
                            className="goByLink_button-wrapper"
                        >
                            <a 
                                className="goByLink_button" 
                                href={articleUrl2} 
                                target="_blank"
                            >
                                Перейти
                            </a>
                        </Div>
                    }
                />
            </Div>

            {/* <Spacing size={63} /> */}

            <Div className="button_wrapper-description">
                <CellButton 
                    className="goNext-button"
                    centered
                    onClick={() => {
                        routeNavigator.push("/");
                        dispatch(clearData())
                    }}
                >
                    <div className="goNext-button_wrapper">
                        <span className="toHome_button">
                            <Icon24ChevronCompactLeft />
                            На главную
                        </span>
                    </div>
                </CellButton>
            </Div>
        </Panel>
    );
}

export default ArticlePage;