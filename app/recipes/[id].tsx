import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
export default function RecipeDetails() {
	const { id, name } = useLocalSearchParams();
	return (
		<View>
			<Stack.Screen
				options={{
					headerTitle: `${name}`,
				}}
			/>
			<Text>Recipe Details: id: {id}</Text>
		</View>
	);
}
