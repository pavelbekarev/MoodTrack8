import React, { useState, useEffect } from 'react';
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
import EmotionList from './panels/EmotionList';

import "./css/MainPage.css";
import "./css/LoadPage.css";
import EmotionHappy from './panels/EmotionList/EmotionHappy';
import EmotionAnger from './panels/EmotionList/EmotionAnger';
import EmotionSadness from './panels/EmotionList/EmotionSadness';
import EmotionSurprise from './panels/EmotionList/EmotionSurprise';
import EmotionDislike from './panels/EmotionList/EmotionDislike';



const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const [activeStory, setActiveStory] = useState("");
	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView("default_view");


	const setCalendarDate = () => {
		let currentDate = new Date();
	

		const month = {
			1: "января",
			2: "февраля",
			3: "марта",
			4: "апреля",
			5: "мая",
			6: "июня",
			7: "июля",
			8: "августа",
			9: "сентября",
			10: "октября",
			11: "ноября",
			12: "декабря"
		}
	
		const [currentDay, setCurrentDay] = useState(currentDate.getDate());
		const [currentMonth, setCurrentMonth] = useState(month[currentDate.getMonth() + 1]);
		const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
	
		return currentDate;
	}


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
									<EmotionPage setCalendarDate={setCalendarDate} nav="emotions_panel"/>
									<EmotionHappy nav="emotionHappy_panel" />
									<EmotionAnger nav="emotionAnger_panel" />
									<EmotionSadness nav="emotionSadness_panel" />
									<EmotionSurprise nav="emotionSurprise_panel" />
									<EmotionDislike nav="emotionDislike_panel" />
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

