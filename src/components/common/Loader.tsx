import { View, ActivityIndicator } from 'react-native';

const Loader = () => {
	return (
		<View className='absolute inset-0 justify-center items-center'>
			<ActivityIndicator
				size='large'
				color='#0000ff'
			/>
		</View>
	);
};

export default Loader;
