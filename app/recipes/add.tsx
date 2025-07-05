import { Stack } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
	Button,
	Checkbox,
	type CheckboxProps,
	Form,
	H1,
	Input,
	Label,
	TextArea,
	XStack,
	YStack,
} from 'tamagui';

const Add = () => {
	const [fields, setFields] = useState({
		title: '',
		description: '',
		instructions: '',
		is_vegetarian: false,
		is_vegan: false,
		is_gluten_free: false,
		is_dairy_free: false,
	});

	const handleChange = (value: string | boolean, fieldName: string) => {
		setFields((prevFormData) => ({
			...prevFormData,
			[fieldName]: value,
		}));
	};

	return (
		<ScrollView className="p-4" contentContainerClassName="pb-16">
			<Stack.Screen
				options={{
					headerTitle: '',
				}}
			></Stack.Screen>
			<H1 size="$8" fontWeight={'bold'}>
				Add a recipe
			</H1>
			<Form>
				<Label htmlFor="title">Name</Label>
				<Input
					id="title"
					size="$4"
					borderWidth={2}
					onChangeText={(text) => handleChange(text, 'title')}
				/>

				<Label htmlFor="description">Description</Label>
				<Input
					id="description"
					size="$4"
					borderWidth={2}
					onChangeText={(text) => handleChange(text, 'description')}
				/>

				<Label htmlFor="instructions">Instructions</Label>
				<TextArea
					id="instructions"
					size="$4"
					borderWidth={2}
					onChangeText={(text) => handleChange(text, 'instructions')}
				/>

				<XStack gap="$4" flex={1}>
					<View className="flex-1 w-full">
						<Label htmlFor="cook_time">Cook time (minutes)</Label>
						<Input
							id="cook_time"
							size="$4"
							borderWidth={2}
							onChangeText={(text) => handleChange(text, 'cook_time')}
						/>
					</View>
					<View className="flex-1 w-full">
						<Label htmlFor="prep_time">Prep time (minutes)</Label>
						<Input
							id="prep_time"
							size="$4"
							borderWidth={2}
							onChangeText={(text) => handleChange(text, 'prep_time')}
						/>
					</View>
				</XStack>

				<View className="my-4" />

				<YStack width={300} alignItems="center" gap="$1">
					<CheckboxWithLabel
						size="$4"
						label="Vegetarian"
						onCheckedChange={(checked) =>
							handleChange(checked, 'is_vegetarian')
						}
					/>

					<CheckboxWithLabel
						size="$4"
						label="Vegan"
						onCheckedChange={(checked) => handleChange(checked, 'is_vegan')}
					/>

					<CheckboxWithLabel
						size="$4"
						label="Gluten Free"
						onCheckedChange={(checked) =>
							handleChange(checked, 'is_gluten_free')
						}
					/>

					<CheckboxWithLabel
						size="$4"
						label="Dairy Free"
						onCheckedChange={(checked) =>
							handleChange(checked, 'is_dairy_free')
						}
					/>
				</YStack>

				<View className="my-4" />

				<Form.Trigger asChild>
					<Button>Add recipe</Button>
				</Form.Trigger>
			</Form>

			<Text>{JSON.stringify(fields)}</Text>
		</ScrollView>
	);
};

export default Add;

export function CheckboxWithLabel({
	size,
	label = '',
	...checkboxProps
}: CheckboxProps & { label?: string }) {
	const id = `checkbox-${(label || '').toString().slice(1)}`;

	return (
		<XStack width={300} alignItems="center" gap="$4">
			<Checkbox id={id} size={size} {...checkboxProps}>
				<Checkbox.Indicator>
					<SymbolView name="checkmark" />
				</Checkbox.Indicator>
			</Checkbox>

			<Label size={size} htmlFor={id}>
				{label}
			</Label>
		</XStack>
	);
}
