import { Suspense, useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// 3d stuff
import { Canvas } from '@react-three/fiber';
import { SafeAreaView } from 'react-native-safe-area-context';
import useControls from 'r3f-native-orbitcontrols';
import Trigger from '@components/Trigger';
import Loader from '@components/common/Loader';
import Gradient from '@components/Gradient';
import BackButton from '@components/common/BackButton';
import Lights from '@components/Lights';

type LayoutOrbitControlsProps = {
	statusBarStyle: 'light' | 'dark';
	bottomTitle?: string;
	bottomTitleColor: 'black' | 'white';
	children: React.ReactNode;
	bottomDescription?: string;
};

const LayoutOrbitControls = ({
	statusBarStyle = 'light',
	bottomTitle = '',
	bottomTitleColor = 'white',
	children,
	bottomDescription = '',
}: LayoutOrbitControlsProps) => {
	const [OrbitControls, event] = useControls();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<SafeAreaView className='flex-1 bg-black p-5'>
			<StatusBar style={statusBarStyle} />

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
						{children}
					</Suspense>
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

export default LayoutOrbitControls;
