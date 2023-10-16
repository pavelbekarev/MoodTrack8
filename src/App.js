import React, { useState, useEffect, Fragment } from 'react';
import bridge from '@vkontakte/vk-bridge';

import { 
	View, 
	AdaptivityProvider, 
	AppRoot, 
	ConfigProvider, 
	SplitLayout, 
	SplitCol, 
	Root,
	Epic, 
	Tabbar,
	TabbarItem
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import { LoadPage } from './panels/LoadPage';
import MainPage from "./panels/MainPage";
import Icon48CameraOnGridOutline from "./components/Icon48CameraOnGridOutline";

import "./css/MainPage.css";
import "./css/LoadPage.css";
import { Icon16MenuOutline, Icon28User } from '@vkontakte/icons';

const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const [activeView, setActiveView] = useState("app-view");
	const [activePanel, setActivePanel] = useState("mainpage");
	const [activeStory, setActiveStory] = useState("");

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	// if (activeView == "loading-view") {
	// 	useEffect(() => {
	// 		setTimeout(() => {
	// 			setActiveView("app-view")
	// 		}, 2000);
	// 	}, [])
	// }

	return (
		<ConfigProvider webviewType="vkapps">
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<Epic activeStory={activeView} tabbar={
								<Tabbar>
									<TabbarItem>
										<Icon16MenuOutline />
									</TabbarItem>
									<TabbarItem>
										<Icon48CameraOnGridOutline />
									</TabbarItem>
									<TabbarItem>
										<Icon28User />
									</TabbarItem>
								</Tabbar>
							}>
								<View id="loading-view" activePanel="loadpage">
									<LoadPage id="loadpage"/>
								</View>
								<View id="app-view" activePanel={activePanel}>
									<MainPage id="mainpage" />
								</View>
								{/* <Root activeView={activeView}>
									<View id="loading-view" activePanel={activePanel}>
										<LoadPage id="loadpage"/>
									</View>
								</Root>
								<Root activeView={activeView}>
									<View id="app-view" activePanel={activePanel}>
										<MainPage id="mainpage"/>
									</View>
								</Root> */}
							</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

