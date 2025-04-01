import Button from '@components/common/Button';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { INGREDIENTS, useSandwich } from 'src/hooks/useSandwich';

const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const BottomUI = () => {
	const { addIngredient, total, addedToCart, setAddedToCart } = useSandwich();

	return (
		<SafeAreaView>
			<View className='p-5'>
				{addedToCart ? (
					<View>
						<Text className='text-lg font-extrabold'>
							Total: ${total.toFixed(2)}
						</Text>
						<Text className='mt-1 mb-4 text-primary-500'>
							Order sent successfully. It will be ready in 5 minutes.
						</Text>
						<Button
							text='Cancel Order'
							handlePress={() => setAddedToCart(false)}
							textColor='white'
							buttonClassName='bg-primary-300'
						/>
					</View>
				) : (
					<>
						<View className='flex-row gap-2 items-center'>
							<Text className='flex-shrink text-xl font-extrabold'>
								Armate tu Chegusán ! 🥪
							</Text>
							<Text>⭐⭐⭐⭐⭐</Text>
						</View>

						<Text className='text-primary-400'>
							Fresh and delicious sandwiches made with love
						</Text>
						<View className='h-[1px] bg-light-200 my-5' />
						<Text className='text-lg font-extrabold text-center'>
							Your Creation ($5.00)
						</Text>
						<Text className='text-center text-dark-200 font-bold'>
							Compose your sandwich by adding ingredients
						</Text>

						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							className='my-4'
						>
							{Object.entries(INGREDIENTS).map(
								([ingredient, ingredientData]) => (
									<View
										key={ingredient}
										className='p-[10px]'
									>
										<Button
											text={`${ingredientData.icon} ${capitalizeFirstLetter(ingredient)} (+$${ingredientData.price.toFixed(2)})`}
											handlePress={() => {
												addIngredient(ingredient as keyof typeof INGREDIENTS);
											}}
											textColor='black'
											buttonClassName='bg-light-200'
										/>
									</View>
								)
							)}
						</ScrollView>

						<Button
							text={`Add to cart: $${total.toFixed(2)}`}
							handlePress={() => setAddedToCart(true)}
							textColor='white'
							buttonClassName='bg-primary-300'
						/>
					</>
				)}
			</View>
		</SafeAreaView>
	);
};

export default BottomUI;
