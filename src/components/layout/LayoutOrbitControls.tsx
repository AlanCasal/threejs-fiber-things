import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// 3d stuff
import { Canvas } from '@react-three/fiber/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useControls from 'r3f-native-orbitcontrols';
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
	isLoading?: boolean;
};

const LayoutOrbitControls = ({
	statusBarStyle = 'light',
	bottomTitle = '',
	bottomTitleColor = 'white',
	children,
	bottomDescription = '',
	isLoading = false,
}: LayoutOrbitControlsProps) => {
	const [OrbitControls, event] = useControls();

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
					onCreated={state => {
						// https://github.com/pmndrs/react-three-fiber/issues/2574#issuecomment-1280012205
						const _gl: any = state.gl.getContext();

						const pixelStorei = _gl.pixelStorei.bind(_gl);
						_gl.pixelStorei = function (...args: any[]) {
							const [parameter] = args;

							switch (parameter) {
								// expo-gl only supports the flipY param
								case _gl.UNPACK_FLIP_Y_WEBGL:
									return pixelStorei(...args);
							}
						};
					}}
				>
					<OrbitControls
						enableZoom={false}
						enablePan={false}
					/>

					<Lights />

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

export default LayoutOrbitControls;
