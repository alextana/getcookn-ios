import { Link } from 'expo-router';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { capitalize } from 'remeda';

const HomeIntro = () => {
	const categories = ['quick', 'healthy', 'vegetarian', 'plant based'];

	return (
		<View>
			<Text className="text-2xl font-bold mb-4">Get inspired</Text>
			<FlatList
				numColumns={2}
				contentContainerClassName="gap-4 mb-8"
				columnWrapperClassName="gap-4"
				horizontal={false}
				data={categories}
				renderItem={({ item }) => (
					<Link
						href={{
							pathname: '/categories/[id]',
							params: { id: item },
						}}
						key={item}
						push
					>
						<View
							className="rounded-xl bg-white p-4"
							style={{
								width: Dimensions.get('screen').width / 2 - 22,
							}}
						>
							<Text className="text-gray-600">{capitalize(item)}</Text>
						</View>
					</Link>
				)}
			></FlatList>
		</View>
	);
};

export default HomeIntro;
