export interface Ingredient {
	id: number;
	recipeId: number;
	item: string;
	quantity: number;
	unit: string;
	notes: string | null;
}

export interface Recipe {
	id: number;
	name: string;
	description: string;
	userId: number;
	instructions: string;
	imageUrl: string;
	servings: number;
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	totalTimeMinutes: number;
	cuisine: string;
	isVegetarian: boolean;
	isVegan: boolean;
	isGlutenFree: boolean;
	isDairyFree: boolean;
	sourceUrl?: string;
	sourceName?: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
	ingredients: Ingredient[];
}

export interface SingleRecipeApiResponse {
	success: boolean;
	status: number;
	recipe: Recipe;
}

export interface RecipeListApiResponse {
	success: boolean;
	status: number;
	recipes: Recipe[];
}
