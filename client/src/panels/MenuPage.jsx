import { Panel } from "@vkontakte/vkui";
import React, { useState } from "react";
import HeaderPanel from "../components/HeaderPanel";
import {DatePanel} from "../components/DatePanel"

const MenuPage = () => {
    


    return (
        <Panel>
            <HeaderPanel />
            <DatePanel />
        </Panel>
    );
}

export default MenuPage;