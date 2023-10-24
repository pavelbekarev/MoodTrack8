import { PanelHeader, Div, Text, PanelHeaderButton } from "@vkontakte/vkui";
import {Icon20FilterOutline} from '@vkontakte/icons';

export default function HeaderPanel() {
    return (
        <Div className="panelheader__parent">
            <PanelHeader separator={false} className="panelheader" before={<PanelHeaderButton className="left"><Icon20FilterOutline className="logo"/></PanelHeaderButton>}>
                <Text className="panelheader__text">MoodTrack</Text>
            </PanelHeader>
        </Div>
    );
}