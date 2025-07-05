import type {
	Ingredient,
	SingleRecipeApiResponse,
} from '@/src/types/recipes/Recipe';
import { useQuery } from '@tanstack/react-query';
import { Stack, useLocalSearchParams } from 'expo-router';
import {
	ActivityIndicator,
	FlatList,
	ScrollView,
	Text,
	View,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import { capitalize } from 'remeda';

export default function RecipeDetails() {
	const { id } = useLocalSearchParams();

	const query = useQuery({
		queryKey: ['recipeDetails', id],
		queryFn: async (): Promise<SingleRecipeApiResponse> => {
			const response = await fetch(
				`https://getcookn-api.alex-tana1992.workers.dev/recipes/${id}`,
			);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		},
	});
	return (
		<ScrollView className="p-4" contentContainerClassName="pb-16">
			<Stack.Screen
				options={{
					headerTitle: '',
				}}
			/>

			{query.isLoading && (
				<ActivityIndicator
					size="large"
					color="#0000ff"
					style={{ marginTop: 20 }}
				/>
			)}

			{query.data?.recipe && (
				<View>
					<Text className="text-2xl font-bold mb-4">
						{query.data.recipe.name}
					</Text>
					<Text>{query.data.recipe.description}</Text>

					{query.data?.recipe.ingredients &&
						query.data.recipe.ingredients.length > 0 && (
							<View className="my-4">
								<Text className="text-xl font-semibold mb-4">
									Ingredients:{' '}
								</Text>
								<FlatList
									contentContainerClassName="gap-4 mb-8"
									columnWrapperClassName="gap-4"
									scrollEnabled={false}
									numColumns={2}
									data={query.data.recipe.ingredients}
									renderItem={({ item }: { item: Ingredient }) => (
										<View
											key={item.id}
											className="flex-1 px-3 py-3 rounded-lg bg-white w-max"
										>
											<View>
												<Text>{capitalize(item.item)} </Text>
												<Text className="font-bold text-gray-600 text-sm uppercase">
													{item.quantity}{' '}
													<Text className="text-xs">{item.unit || ''}</Text>
												</Text>
											</View>
										</View>
									)}
								></FlatList>
							</View>
						)}

					{query.data?.recipe.instructions && (
						<View>
							<Text className="text-xl font-semibold mb-2">Instructions: </Text>
							<Markdown>{query.data?.recipe.instructions}</Markdown>
						</View>
					)}
				</View>
			)}
		</ScrollView>
	);
}
