import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
	handlePress: () => void;
	text: string;
	className?: NativeWindStyleProp;
};

const Button = ({ handlePress, text, className }: ButtonProps) => {
	return (
		<TouchableOpacity
			className={`p-4 rounded-lg ${className}`}
			onPress={handlePress}
		>
			<Text className='text-white text-center font-bold text-xl tracking-widest'>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
