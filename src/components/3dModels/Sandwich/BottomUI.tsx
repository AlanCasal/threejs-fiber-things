import { SafeAreaView, View, Text } from 'react-native';

const BottomUI = () => {
	return (
		<SafeAreaView>
			<View className='p-5'>
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
			</View>
		</SafeAreaView>
	);
};

export default BottomUI;
