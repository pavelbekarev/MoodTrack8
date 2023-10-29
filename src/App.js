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

import CalendarPage from "./panels/CalendarPage";
import MainTabbar from './components/MainTabbar';
import ProfilePage from './panels/ProfilePage';
import EmotionPage from './panels/EmotionPage';

import "./css/MainPage.css";
import "./css/LoadPage.css";



const App = () => {
	const [fetchedUser, setUser] = useState(null);
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
									3. Добавлена проверка дня календаря.
										Если сегодня -> пользователю предлагается выбрать эмоцию
										Если не сегодня -> пользователю выводится сообщение о том, что 
											выбранный день уже прошел / еще не наступил
									4. Окно "Выбор дня" - закончено
									5. Создана панель EmotionPage, на которой пользователь сможет выбрать эмоцию
							*/}
							
							<Epic activeStory={activeView} tabbar={<MainTabbar />}>
								<View nav={activeView} activePanel={activePanel}>
									<CalendarPage nav="home_panel" />
									<ProfilePage nav="profile_panel" />
									<EmotionPage nav="emotions_panel"/>
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

