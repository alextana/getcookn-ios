import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import {
	ActivityIndicator,
	Dimensions,
	FlatList,
	Text,
	View,
} from 'react-native';

interface Recipe {
	id: string;
	name: string;
	description: string;
}

export default function RecipeDisplay({ limit = 10 }: { limit?: number }) {
	const query = useQuery({
		queryKey: ['homeRecipes'],
		queryFn: () => getHomeRecipes({ limit }),
	});

	if (query.isLoading) {
		return (
			<ActivityIndicator
				size="large"
				color="#0000ff"
				style={{ marginTop: 20 }}
			/>
		);
	}

	return (
		<>
			<View>
				<Text className="text-2xl font-bold mb-4">Recipes</Text>
			</View>

			<FlatList
				numColumns={2}
				initialNumToRender={20}
				horizontal={false}
				contentContainerClassName="gap-4"
				columnWrapperClassName="gap-4"
				data={query.data?.recipes}
				renderItem={({ item }: { item: Recipe }) => (
					<Link
						href={{
							pathname: '/recipes/[id]',
							params: { id: item.id, name: item.name },
						}}
						push
						key={item.id}
					>
						<View
							className="rounded-lg bg-white p-4"
							style={{ width: Dimensions.get('screen').width / 2 - 22 }}
						>
							<Text className="">{item.name}</Text>
						</View>
					</Link>
				)}
			/>
		</>
	);
}

const getHomeRecipes = async ({ limit }: { limit: number }) => {
	const response = await fetch(
		`https://getcookn-api.alex-tana1992.workers.dev/recipes?limit=${limit}`,
	);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};
