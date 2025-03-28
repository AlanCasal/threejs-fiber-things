import Button from '@components/Button';
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const home = () => {
	return (
		<SafeAreaView className='flex-1 bg-dark-800 p-5 pt-10'>
			<Text className='text-white text-2xl font-bold text-center mb-10'>
				3D Models playground
			</Text>

			<View className='flex-1 gap-5'>
				<Button
					handlePress={() => router.push('/starlink')}
					text='Starlink'
					className='bg-primary-300'
				/>
			</View>
		</SafeAreaView>
	);
};

export default home;
