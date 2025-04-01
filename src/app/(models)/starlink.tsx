import { Suspense, useState } from 'react';
import Starlink from '@components/3dModels/Starlink';
import LayoutOrbitControls from '@components/layout/LayoutOrbitControls';
import Trigger from '@components/Trigger';

const StarlinkScreen = () => {
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
				<Starlink />
			</Suspense>
		</LayoutOrbitControls>
	);
};

export default StarlinkScreen;

// https://www.youtube.com/watch?v=iRavet_Zau8
