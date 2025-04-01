import { Gltf } from '@react-three/drei/native';
import { INGREDIENTS } from 'src/hooks/useSandwich';

const INGREDIENT_SCALE = 3;
const INGREDIENT_SCALE_Y = 5;

interface IngredientProps {
	ingredient: {
		name: keyof typeof INGREDIENTS;
	};
}

const Ingredient = ({ ingredient, ...props }: IngredientProps) => {
	if (!ingredient) return null;

	return (
		<group {...props}>
			<Gltf
				src={INGREDIENTS[ingredient.name].src}
				scale={INGREDIENT_SCALE}
				scale-y={INGREDIENT_SCALE_Y + (ingredient.name === 'bread' ? 5 : 0)}
			/>
		</group>
	);
};

export default Ingredient;
