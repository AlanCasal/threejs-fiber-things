/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { useGLTF } from '@react-three/drei/native';
import * as THREE from 'three';

// Import the Starlink model which is already in GLB format
const starlinkModel = require('@/assets/models/Starlink.glb');

const StarlinkModel = () => {
	const groupRef = useRef<THREE.Group>(null);

	// Load the GLTF model and use type assertion to fix TypeScript errors
	const gltf = useGLTF(starlinkModel) as any;

	// Animate the model
	useFrame((state, delta) => {
		if (groupRef.current) {
			// Rotate the model around the Y axis
			groupRef.current.rotation.y += delta * 0.5;

			// Make the model gently hover up and down
			groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
		}
	});

	return (
		<group
			ref={groupRef}
			position={[0, 0, 0]}
			scale={[0.5, 0.5, 0.5]}
		>
			<primitive object={gltf.scene} />
		</group>
	);
};

// Preload the model to improve performance
useGLTF.preload(starlinkModel);

export default StarlinkModel;
