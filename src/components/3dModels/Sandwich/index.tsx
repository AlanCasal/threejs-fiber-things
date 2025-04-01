/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber/native';
import Ingredient from './Ingredient';
import { useSandwich } from 'src/hooks/useSandwich';
import { ContactShadows } from '@react-three/drei/native';

const INGREDIENT_SPACING = 0.2;
const INGREDIENT_SPACING_FINAL = 0.06;

const Sandwich = () => {
	const sandwichRef = useRef<Group>(null);

	const { ingredients, addedToCart } = useSandwich();
	const ingredientSpacing = addedToCart
		? INGREDIENT_SPACING_FINAL
		: INGREDIENT_SPACING;

	useFrame(() => {
		addedToCart
			? (sandwichRef.current!.rotation.y += 0.01)
			: (sandwichRef.current!.rotation.y = 0);
	});

	return (
		<group position-y={(-ingredients.length * ingredientSpacing) / 2}>
			<group ref={sandwichRef}>
				{ingredients.map((ingredient, index) => (
					<Ingredient
						key={ingredient.id + ingredient.name}
						showPrice={index > 0 && index < ingredients.length - 1}
						ingredient={ingredient}
						position-y={index * ingredientSpacing}
					/>
				))}
			</group>

			<ContactShadows
				blur={2}
				scale={4}
				position-y={-0.5}
				opacity={0.6}
			/>
		</group>
	);
};

export default Sandwich;
