import { useSandwich } from 'src/hooks/useSandwich';
import Ingredient from './Ingredient';

const INGREDIENT_SPACING = 0.2;

const Sandwich = () => {
	const { ingredients } = useSandwich();

	return (
		<group>
			{ingredients.map((ingredient, index) => (
				<Ingredient
					key={ingredient.id + ingredient.name}
					ingredient={ingredient}
					position-y={index * INGREDIENT_SPACING}
				/>
			))}
		</group>
	);
};

export default Sandwich;
