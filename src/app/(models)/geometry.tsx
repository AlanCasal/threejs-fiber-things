/* eslint-disable react/no-unknown-property */
import LayoutA from '@components/layout/LayoutA';
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';
const Box = (props: MeshProps) => {
	const [isActive, setIsActive] = useState(false);
	const boxRef = useRef<Mesh>(null);

	useFrame((state, delta) => {
		if (boxRef.current && isActive) {
			boxRef.current.rotation.y += delta; // 0.01
			boxRef.current.rotation.x += delta;
		}
	});

	return (
		<mesh
			{...props}
			ref={boxRef}
			scale={isActive ? 1.5 : 1}
			onClick={() => setIsActive(!isActive)}
		>
			<boxGeometry />
			<meshStandardMaterial color={isActive ? 'green' : 'gray'} />
		</mesh>
	);
};

const Geometry = () => {
	return (
		<LayoutA
			bottomTitle='👆🏼 Tap a box !'
			bottomTitleColor='white'
			statusBarStyle='light'
		>
			{/* <ambientLight /> */}
			<directionalLight
				position={[10, 10, 10]}
				args={['white', 2]}
			/>
			<directionalLight
				position={[-10, -5, 10]}
				args={['yellow', 1]}
			/>

			<Box />
			<Box position={[1, 2, 0]} />
			<Box position={[0, -2, 0]} />

			{/* <mesh
				position={[0, -2, 0]}
				scale={[0.5, 0.5, 0.5]}
			>
				<torusKnotGeometry />
				<meshStandardMaterial color='blue' />
			</mesh> */}
		</LayoutA>
	);
};

export default Geometry;
