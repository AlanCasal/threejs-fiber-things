import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
	handlePress: () => void;
	text: string;
	textColor?: 'white' | 'black';
	buttonClassName?: NativeWindStyleProp;
};

const Button = ({
	handlePress,
	text,
	buttonClassName,
	textColor = 'white',
}: ButtonProps) => {
	return (
		<TouchableOpacity
			className={`p-4 rounded-lg ${buttonClassName}`}
			onPress={handlePress}
		>
			<Text
				className={`text-${textColor} text-center font-bold text-xl tracking-widest`}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
