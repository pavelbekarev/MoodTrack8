import React, { useState, useEffect, Fragment } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import { LoadPage } from './panels/LoadPage';
import { MainPage } from './panels/MainPage';

const App = () => {
	const [activePanel, setActivePanel] = useState("mainpage");
	const [fetchedUser, setUser] = useState(null);

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

	if (activePanel == "homepage") {
		useEffect(() => {
			setTimeout(() => {
				setActivePanel("mainpage")
			}, 2000);
		}, [])
	}
	

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<View activePanel={activePanel}>
								<LoadPage id="homepage"/>
								<MainPage id="mainpage"/>
								<Persik id="persik"/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
