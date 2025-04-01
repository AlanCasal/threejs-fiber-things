/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { Float, Gltf, Text3D } from '@react-three/drei/native';
import { Suspense } from 'react';
import { INGREDIENTS, useSandwich } from 'src/hooks/useSandwich';
import { animated, useSpring } from '@react-spring/three';
import { GroupProps } from '@react-three/fiber';

const fontPath = require('@/assets/fonts/Poppins_Bold.json');

const INGREDIENT_SCALE = 3;
const INGREDIENT_SCALE_Y = 5;

interface SpecificIngredientProps {
	showPrice: boolean;
	ingredient: {
		id: number;
		name: keyof typeof INGREDIENTS;
	};
	'position-y'?: number;
}

type IngredientPropsCombined = SpecificIngredientProps & GroupProps;

const Ingredient = ({
	ingredient,
	showPrice,
	'position-y': positionYProp,
	...props
}: IngredientPropsCombined) => {
	const { positionY } = useSpring({ positionY: positionYProp });
	const { scale } = useSpring({ from: { scale: 0.5 }, to: { scale: 1 } });

	const { addedToCart, removeIngredient } = useSandwich();

	if (!ingredient) return null;

	return (
		<animated.group
			{...props}
			scale={scale}
			position-y={positionY}
		>
			{showPrice && (
				<Suspense fallback={null}>
					<group
						visible={!addedToCart}
						onClick={e => {
							e.stopPropagation();
							removeIngredient({
								id: ingredient.id,
								name: ingredient.name as keyof typeof INGREDIENTS,
							});
						}}
					>
						<mesh
							position-x={0.7}
							position-y={0.042}
						>
							<planeGeometry args={[0.9, 0.16]} />
							<meshStandardMaterial
								color='white'
								opacity={0.42}
								transparent
							/>
						</mesh>
						<Text3D
							font={fontPath}
							scale={0.1}
							bevelSegments={3}
							bevelEnabled
							bevelThickness={0.001}
							position-x={0.42}
						>
							${INGREDIENTS[ingredient.name].price.toFixed(2)}
						</Text3D>
						<Text3D
							font={fontPath}
							scale={0.1}
							bevelSegments={3}
							bevelEnabled
							bevelThickness={0.001}
							position-x={0.87}
						>
							X
							<meshBasicMaterial color='red' />
						</Text3D>
					</group>
				</Suspense>
			)}
			<Float
				floatingRange={addedToCart ? [0, 0] : [-0.01, 0.01]}
				speed={addedToCart ? 0 : 4}
				rotationIntensity={0.05}
			>
				<Gltf
					src={INGREDIENTS[ingredient.name].src}
					scale={INGREDIENT_SCALE}
					scale-y={INGREDIENT_SCALE_Y + (ingredient.name === 'bread' ? 5 : 0)}
				/>
			</Float>
		</animated.group>
	);
};

export default Ingredient;
