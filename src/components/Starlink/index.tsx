import { Suspense, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StarlinkModel from './StarlinkModel';

// 3d stuff
import { Canvas } from '@react-three/fiber';
import { SafeAreaView } from 'react-native-safe-area-context';
import useControls from 'r3f-native-orbitcontrols';
import Trigger from '@components/Trigger';
import Loader from '@components/Loader';

const LIGHT_POSITION = {
	right: {
		position: [1, 0, 0],
		args: ['white', 2],
	},
	left: {
		position: [-1, 0, 0],
		args: ['white', 2],
	},
	front: {
		position: [0, 0, 1],
		args: ['white', 2],
	},
	back: {
		position: [0, 0, -1],
		args: ['white', 2],
	},
	top: {
		position: [0, 1, 0],
		args: ['white', 15],
	},
	bottom: {
		position: [0, -1, 0],
		args: ['white', 2],
	},
};

const Lights = () => {
	return (
		<>
			<directionalLight
				position={LIGHT_POSITION.right.position}
				args={LIGHT_POSITION.right.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.left.position}
				args={LIGHT_POSITION.left.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.front.position}
				args={LIGHT_POSITION.front.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.back.position}
				args={LIGHT_POSITION.back.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.top.position}
				args={LIGHT_POSITION.top.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.bottom.position}
				args={LIGHT_POSITION.bottom.args}
			/>
		</>
	);
};

const Starlink = () => {
	const [OrbitControls, event] = useControls();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<SafeAreaView className='flex-1 bg-black p-5'>
			<StatusBar style='light' />
			<View className='gap-2 my-5'>
				<Text className='text-white text-center font-bold text-lg'>
					Paired successfully! 😁
				</Text>
				<Text className='text-gray-300 text-center text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos. Lorem ipsum amet consectetur adipisicing elit. Quisquam, quos.
				</Text>
			</View>

			<View
				className='flex-1'
				{...event}
			>
				{isLoading && <Loader />}

				<Canvas>
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

			<TouchableOpacity className='bg-primary-500 p-4 rounded-lg'>
				<Text className='text-white text-center font-bold text-lg'>
					Continue
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Starlink;
