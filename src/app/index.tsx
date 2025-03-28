import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
	return (
		<SafeAreaView className='flex-1 bg-black'>
			<StatusBar style='light' />
			<Text className='text-white text-center font-bold text-lg'>
				Paired successfully! 😁
			</Text>
			<Text className='text-gray-300 text-center text-sm'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
				Lorem ipsum amet consectetur adipisicing elit. Quisquam, quos.
			</Text>
		</SafeAreaView>
	);
};

export default Index;
