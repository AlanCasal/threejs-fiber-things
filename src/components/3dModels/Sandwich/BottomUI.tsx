import { Text, SafeAreaView } from 'react-native';
import Button from '../../common/Button';

const BottomUI = () => {
	return (
		<SafeAreaView className='p-5'>
			<Text className='text-black text-2xl font-bold text-center mb-10'>
				Food 🍔
			</Text>
			<Button
				handlePress={() => {}}
				text='Add Food'
				className='bg-primary-500'
			/>
		</SafeAreaView>
	);
};

export default BottomUI;
