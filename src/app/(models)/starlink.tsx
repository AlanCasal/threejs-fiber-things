import StarlinkModel from '@components/models/Starlink';
import LayoutOrbitControls from '@components/layout/LayoutOrbitControls';

const Starlink = () => {
	return (
		<LayoutOrbitControls
			statusBarStyle='light'
			bottomTitle='Starlink 📡'
			bottomTitleColor='white'
			bottomDescription='Tap on the model and drag to rotate it'
		>
			<StarlinkModel />
		</LayoutOrbitControls>
	);
};

export default Starlink;

// https://www.youtube.com/watch?v=iRavet_Zau8
