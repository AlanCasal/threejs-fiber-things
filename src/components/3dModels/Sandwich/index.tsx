/* eslint-disable react/no-unknown-property */
import { useSandwich } from 'src/hooks/useSandwich';
import Ingredient from './Ingredient';

const INGREDIENT_SPACING = 0.2;
const INGREDIENT_SPACING_FINAL = 0.06;

const Sandwich = () => {
	const { ingredients, addedToCart } = useSandwich();
	const ingredientSpacing = addedToCart
		? INGREDIENT_SPACING_FINAL
		: INGREDIENT_SPACING;

	return (
		<group position-y={(-ingredients.length * ingredientSpacing) / 2}>
			{ingredients.map((ingredient, index) => (
				<Ingredient
					key={ingredient.id + ingredient.name}
					showPrice={index > 0 && index < ingredients.length - 1}
					ingredient={ingredient}
					position-y={index * ingredientSpacing}
				/>
			))}
		</group>
	);
};

export default Sandwich;
