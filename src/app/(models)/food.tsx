/* eslint-disable react/no-unknown-property */
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Canvas } from '@react-three/fiber/native';
import BottomUI from '@components/3dModels/Sandwich/BottomUI';
import Sandwich from '@components/3dModels/Sandwich';
import { Suspense } from 'react';

const Food = () => {
	return (
		<>
			<StatusBar style='light' />
			<View className='flex-1 bg-white'>
				<Canvas
					camera={{ position: [-2, 2.5, 5], fov: 30 }}
					gl={{ debug: { checkShaderErrors: false, onShaderError: null } }} // fix for gl.pixelStorei() support error
				>
					<color
						attach='background'
						args={['#512DA8']}
					/>

					<Suspense fallback={null}>
						<Sandwich />
					</Suspense>
				</Canvas>

				<BottomUI />
			</View>
		</>
	);
};

export default Food;
