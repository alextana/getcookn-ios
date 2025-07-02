import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import { Dimensions, FlatList, Text, View } from 'react-native';

export default function HomeScreen() {
	const query = useQuery({
		queryKey: ['homeRecipes'],
		queryFn: getHomeRecipes,
	});

	interface Recipe {
		id: string;
		name: string;
		description: string;
	}

	return (
		<View
			style={{
				height: Dimensions.get('screen').height / 2,
				width: Dimensions.get('screen').width,
			}}
			className="p-4"
		>
			<View>
				<Text className="text-2xl font-bold mb-4">Recipes</Text>
			</View>
			<FlatList
				numColumns={2}
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
							className="shadow-sm rounded-lg bg-white p-4"
							style={{ width: Dimensions.get('screen').width / 2 - 22 }}
						>
							<Text className="">{item.name}</Text>
						</View>
					</Link>
				)}
			/>
		</View>
	);
}

const getHomeRecipes = async () => {
	const response = await fetch(
		'https://getcookn-api.alex-tana1992.workers.dev/recipes',
	);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};
