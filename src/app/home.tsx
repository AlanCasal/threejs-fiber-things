import Button from '@components/common/Button';
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ButtonType = {
	handlePress: () => void;
	text: string;
	className: NativeWindStyleProp;
};

const BUTTONS: ButtonType[] = [
	{
		handlePress: () => router.push('/(models)/geometry'),
		text: 'Simple geometry',
		className: 'bg-primary-400',
	},
	{
		handlePress: () => router.push('/(models)/starlink'),
		text: 'Starlink',
		className: 'bg-primary-300',
	},
];

const Home = () => {
	return (
		<SafeAreaView className='flex-1 bg-dark-800 p-5 pt-10'>
			<Text className='text-white text-2xl font-bold text-center mb-10'>
				3D Models playground
			</Text>

			<View className='flex-1 gap-5'>
				{BUTTONS.map(button => (
					<Button
						key={button.text}
						handlePress={button.handlePress}
						text={button.text}
						className={button.className}
					/>
				))}
			</View>
		</SafeAreaView>
	);
};

export default Home;
