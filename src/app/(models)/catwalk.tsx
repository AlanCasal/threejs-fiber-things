/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react';
import Loader from '@components/common/Loader';
import Trigger from '@components/Trigger';
import Catwalk from '@components/3dModels/Catwalk';
import LayoutOrbitControls from '@components/layout/LayoutOrbitControls';

const CatwalkScreen = () => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			{isLoading && <Loader />}

			<LayoutOrbitControls
				bottomTitleColor='white'
				statusBarStyle='light'
			>
				{/* <ambientLight intensity={3} /> */}

				{/* <directionalLight
					position={[10, 10, 10]}
					args={['red', 1]}
				/>
				<directionalLight
					position={[-10, -5, 10]}
					args={['yellow', 1]}
				/> */}

				<Suspense fallback={<Trigger setIsLoading={setIsLoading} />}>
					<Catwalk />
				</Suspense>
			</LayoutOrbitControls>
		</>
	);
};

export default CatwalkScreen;
