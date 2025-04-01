/* eslint-disable react/no-unknown-property */
import { View, Text } from 'react-native';
import BackButton from '@components/common/BackButton';
import { Canvas } from '@react-three/fiber/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

type LayoutAProps = {
	statusBarStyle?: 'dark' | 'light';
	backButtonColor?: 'black' | 'white';
	children: React.ReactNode;
	bottomTitle?: string;
	bottomTitleColor?: 'black' | 'white';
	bottomDescription?: string;
};

const LayoutA = ({
	children,
	statusBarStyle = 'dark',
	backButtonColor = 'white',
	bottomTitle = '',
	bottomTitleColor = 'white',
	bottomDescription = '',
}: LayoutAProps) => {
	return (
		<SafeAreaView className='flex-1 p-5 bg-dark-800'>
			<StatusBar style={statusBarStyle} />

			<BackButton
				size={40}
				color={backButtonColor}
			/>

			<View className='flex-1'>
				<Canvas
					gl={{ debug: { checkShaderErrors: false, onShaderError: null } }} // fix for gl.pixelStorei() support error
				>
					{children}
				</Canvas>
			</View>

			<View className='my-5 gap-4'>
				<Text
					className={`text-center font-bold text-3xl text-${bottomTitleColor}`}
				>
					{bottomTitle}
				</Text>
				{bottomDescription && (
					<Text
						className={`text-center font-bold text-xl text-${bottomTitleColor}`}
					>
						{bottomDescription}
					</Text>
				)}
			</View>
		</SafeAreaView>
	);
};

export default LayoutA;
