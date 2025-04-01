import { create } from 'zustand';
import { useGLTF } from '@react-three/drei/native';

const Bacon = require('@components/3dModels/Sandwich/models/Bacon_Slice_Bacon_0.glb');
const Bread = require('@components/3dModels/Sandwich/models/Bread_Slice_Bread_0.glb');
const Cheese = require('@components/3dModels/Sandwich/models/Cheese_Slice_Cheese_0.glb');
const Chicken = require('@components/3dModels/Sandwich/models/Chicken_Slice_Chicken_0.glb');
const Lettuce = require('@components/3dModels/Sandwich/models/Lettuce_Slice_Lettuce_0.glb');
const Mushroom = require('@components/3dModels/Sandwich/models/Mushroom_Slice_Mushroom_0.glb');
const Patty = require('@components/3dModels/Sandwich/models/Patty_Slice_Patty_0.glb');
const Salami = require('@components/3dModels/Sandwich/models/Salami_Slice_Salami_0.glb');
const Sausage = require('@components/3dModels/Sandwich/models/Sausage_Slice_Sausage_0.glb');
const Tomato = require('@components/3dModels/Sandwich/models/Tomato_Slice_Tomato_0.glb');

export const INGREDIENTS = {
	bread: {
		src: Bread,
		price: 0.5,
		icon: '🍞',
	},
	lettuce: {
		src: Lettuce,
		price: 0.5,
		icon: '🥬',
	},
	mushroom: {
		src: Mushroom,
		price: 1,
		icon: '🍄',
	},
	tomato: {
		src: Tomato,
		price: 0.5,
		icon: '🍅',
	},
	cheese: {
		src: Cheese,
		price: 1,
		icon: '🧀',
	},
	chicken: {
		src: Chicken,
		price: 2,
		icon: '🍗',
	},
	sausage: {
		src: Sausage,
		price: 1.5,
		icon: '🌭',
	},
	salami: {
		src: Salami,
		price: 1.5,
		icon: '🍖',
	},
	bacon: {
		src: Bacon,
		price: 1.5,
		icon: '🥓',
	},
	patty: {
		src: Patty,
		price: 2,
		icon: '🍔',
	},
};

// preload all ingredients
Object.keys(INGREDIENTS).forEach(ingredient => {
	useGLTF.preload(INGREDIENTS[ingredient as keyof typeof INGREDIENTS].src);
});

interface SandwichState {
	ingredients: Array<{ id: number; name: keyof typeof INGREDIENTS }>;
	total: number;
	addIngredient: (ingredient: keyof typeof INGREDIENTS) => void;
	removeIngredient: (ingredient: {
		id: number;
		name: keyof typeof INGREDIENTS;
	}) => void;
}

export const useSandwich = create<SandwichState>(set => ({
	ingredients: [
		{
			id: 0,
			name: 'bread',
		},
		{
			id: 1,
			name: 'bread',
		},
	],
	total: 5,
	addIngredient: (ingredient: keyof typeof INGREDIENTS) =>
		set((state: SandwichState) => ({
			total: state.total + INGREDIENTS[ingredient].price,
			ingredients: [
				...state.ingredients.slice(0, -1), // add all ingredients except the last one (the bottom slice of bread)
				{
					id: state.ingredients.length, // id it'll start from 2 because there's already 2 breads (0 and 1)
					name: ingredient,
				},
				{
					id: 1,
					name: 'bread',
				},
			],
		})),
	removeIngredient: ingredient =>
		set((state: SandwichState) => ({
			total: state.total - INGREDIENTS[ingredient.name].price || 0,
			ingredients: state.ingredients.filter(
				(ing: { id: number; name: keyof typeof INGREDIENTS }) =>
					ing.id !== ingredient.id
			),
		})),
}));
