import { Suspense, useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StarlinkModel from '@components/models/Starlink';

// 3d stuff
import { Canvas } from '@react-three/fiber';
import { SafeAreaView } from 'react-native-safe-area-context';
import useControls from 'r3f-native-orbitcontrols';
import Trigger from '@components/Trigger';
import Loader from '@components/common/Loader';
import Gradient from '@components/Gradient';
import BackButton from '@components/common/BackButton';
import Lights from '@components/Lights';

const Starlink = () => {
	const [OrbitControls, event] = useControls();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<SafeAreaView className='flex-1 bg-black p-5'>
			<StatusBar style='light' />

			<BackButton size={40} />

			<View
				className='flex-1'
				{...event}
			>
				<Gradient />

				{isLoading && <Loader />}

				<Canvas
					gl={{ debug: { checkShaderErrors: false, onShaderError: null } }}
				>
					<OrbitControls
						enableZoom={false}
						enablePan={false}
					/>
					<Lights />
					<Suspense fallback={<Trigger setIsLoading={setIsLoading} />}>
						<StarlinkModel />
					</Suspense>
				</Canvas>
			</View>

			<View className='my-5'>
				<Text className='text-white text-center font-bold text-3xl'>
					Starlink
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Starlink;
