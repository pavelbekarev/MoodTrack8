import React, { useState, useEffect, Fragment } from 'react';
import bridge from '@vkontakte/vk-bridge';

import { 
	View, 
	AdaptivityProvider, 
	AppRoot, 
	ConfigProvider, 
	SplitLayout, 
	SplitCol, 
	Epic
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';

import MainPage from "./panels/MainPage";
import MainTabbar from './components/MainTabbar';
import ProfilePage from './panels/ProfilePage';

import "./css/MainPage.css";
import "./css/LoadPage.css";



const App = () => {
	const [fetchedUser, setUser] = useState(null);
	// const [activeView, setActiveView] = useState("loading-view");
	// const [activePanel, setActivePanel] = useState("loadpage");
	const [activeStory, setActiveStory] = useState("");
	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView("default_view");

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	return (
		<ConfigProvider webviewType="vkapps">
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							{/* Сделано:
									1.  TabbarBar - без навигации и функционала.
									2. Добавлены иконки для TabbarItem.

								Сделать:
									1. Навигацию между TabbarItem.
									2. Убрать Tabbar на загрузочном экране ("Лого").
							*/}
							
							<Epic activeStory={activeView} tabbar={<MainTabbar />}>
								<View nav={activeView} activePanel={activePanel}>
									<MainPage nav="home_panel" />
									<ProfilePage nav="profile_panel" />
								</View>
							</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

