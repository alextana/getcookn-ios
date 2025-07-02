import { Tabs } from 'expo-router';

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#2866e3',
				headerStyle: {
					backgroundColor: '#25292e',
				},
				headerShadowVisible: false,
				headerTintColor: '#fff',
				tabBarStyle: {
					backgroundColor: '#25292e',
				},
			}}
		>
			<Tabs.Screen name="index" options={{ headerTitle: 'Home' }} />
			<Tabs.Screen name="saved" />
			<Tabs.Screen name="search" />
		</Tabs>
	);
};

export default TabsLayout;
