import { Panel } from "@vkontakte/vkui";


const HomePage = () => {
    const [activePanel, setActivePanel] = useState("calendarPanel");


    return (
        <View activePanel={activePanel}>
            <Panel id={activePanel}>
                
            </Panel>
        </View>
    );
}

export default HomePage;