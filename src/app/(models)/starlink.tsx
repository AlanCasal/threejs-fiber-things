import { Suspense, useState } from 'react';
import StarlinkModel from '@components/3dModels/Starlink';
import LayoutOrbitControls from '@components/layout/LayoutOrbitControls';
import Trigger from '@components/Trigger';

const Starlink = () => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<LayoutOrbitControls
			statusBarStyle='light'
			bottomTitle='Starlink 📡'
			bottomTitleColor='white'
			bottomDescription='Tap on the model and drag to rotate it'
			isLoading={isLoading}
		>
			<Suspense fallback={<Trigger setIsLoading={setIsLoading} />}>
				<StarlinkModel />
			</Suspense>
		</LayoutOrbitControls>
	);
};

export default Starlink;

// https://www.youtube.com/watch?v=iRavet_Zau8
