import StarlinkModel from '@components/models/Starlink';
import LayoutOrbitControls from '@components/layout/LayoutOrbitControls';

const Starlink = () => {
	return (
		<LayoutOrbitControls
			statusBarStyle='light'
			bottomTitle='Starlink'
			bottomTitleColor='white'
		>
			<StarlinkModel />
		</LayoutOrbitControls>
	);
};

export default Starlink;
