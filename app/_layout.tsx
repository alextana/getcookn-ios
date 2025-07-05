import { defaultConfig } from '@tamagui/config/v4';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { createTamagui, TamaguiProvider } from 'tamagui';
import '../global.css';

const config = createTamagui(defaultConfig);

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<TamaguiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen
						name="recipes/[id]"
						options={{
							headerTitle: 'Recipe Details',
							headerBackTitle: 'Home',
						}}
					/>
					<Stack.Screen
						name="categories/[id]"
						options={{
							headerBackTitle: 'Home',
						}}
					/>
					<Stack.Screen
						name="recipes/add"
						options={{
							headerBackTitle: 'Home',
						}}
					/>
				</Stack>
			</QueryClientProvider>
		</TamaguiProvider>
	);
}
