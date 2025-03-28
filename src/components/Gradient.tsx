import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
	Canvas,
	Circle,
	RadialGradient,
	vec,
} from '@shopify/react-native-skia';
import { useSharedValue, withTiming } from 'react-native-reanimated';

const Gradient = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const gradient = useSharedValue(0);

	useEffect(() => {
		if (width !== 0) {
			gradient.value = withTiming(width / 2, {
				duration: 1000,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width]);

	return (
		<Canvas
			style={StyleSheet.absoluteFillObject}
			onLayout={({ nativeEvent }) => {
				setWidth(nativeEvent.layout.width);
				setHeight(nativeEvent.layout.height);
			}}
		>
			<Circle
				r={width / 2}
				cx={width / 2}
				cy={height / 2}
			>
				<RadialGradient
					colors={['#242B4D', 'black']}
					c={vec(width / 2, height / 2)}
					r={gradient}
				/>
			</Circle>
		</Canvas>
	);
};

export default Gradient;
