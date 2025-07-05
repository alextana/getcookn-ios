import { useQuery } from '@tanstack/react-query';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';
import { capitalize } from 'remeda';

export default function RecipeDetails() {
	const { id } = useLocalSearchParams();

	const title = typeof id === 'string' ? capitalize(id) : '';

	const query = useQuery({
		queryKey: ['recipeCategory', id],
		queryFn: async () => {
			const response = await fetch(
				`https://getcookn-api.alex-tana1992.workers.dev/recipes?category=${id}`,
			);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		},
	});
	return (
		<View className="p-4">
			<Stack.Screen
				options={{
					headerTitle: `${title} recipes`,
				}}
			/>

			{query.isLoading && (
				<ActivityIndicator
					size="large"
					color="#0000ff"
					style={{ marginTop: 20 }}
				/>
			)}

			{query.data?.recipes && (
				<View>
					<Text className="text-2xl font-bold mb-4">{title}</Text>
					<Text>Some recipe here</Text>
				</View>
			)}
		</View>
	);
}
