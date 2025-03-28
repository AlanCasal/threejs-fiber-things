import { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
	Canvas,
	Circle,
	RadialGradient,
	vec,
} from '@shopify/react-native-skia';

const Gradient = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

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
					r={width / 2}
				/>
			</Circle>
		</Canvas>
	);
};

export default Gradient;
