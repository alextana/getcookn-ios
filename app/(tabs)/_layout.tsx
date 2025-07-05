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
			<Tabs.Screen
				name="index"
				options={{ headerTitle: 'Home', title: 'Home' }}
			/>
			<Tabs.Screen name="search" options={{ title: 'Search' }} />
			<Tabs.Screen name="saved" options={{ title: 'Saved' }} />
		</Tabs>
	);
};

export default TabsLayout;
