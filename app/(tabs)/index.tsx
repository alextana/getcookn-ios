import HomeIntro from '@/src/components/HomeIntro';
import RecipeDisplay from '@/src/components/RecipeDisplay';
import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
	const handleAddRecipeRoute = () => {
		router.push('/recipes/add');
	};
	return (
		<View className="flex-1">
			<Pressable
				onPress={handleAddRecipeRoute}
				className="absolute bottom-[30px] right-[30px] rounded-full bg-blue-500 shadow-md z-50 w-[50px] h-[50px] justify-center items-center"
			>
				<SymbolView
					style={styles.symbol}
					tintColor={'white'}
					name="plus"
					type="hierarchical"
				/>
			</Pressable>
			<View
				style={{
					width: Dimensions.get('screen').width,
				}}
				className="p-4"
			>
				<HomeIntro />
				<RecipeDisplay limit={20} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	symbol: {
		width: 28,
		height: 28,
		margin: 5,
	},
});
