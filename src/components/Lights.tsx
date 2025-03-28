const LIGHT_POSITION = {
	right: {
		position: [1, 0, 0],
		args: ['white', 2],
	},
	left: {
		position: [-1, 0, 0],
		args: ['white', 2],
	},
	front: {
		position: [0, 0, 1],
		args: ['white', 2],
	},
	back: {
		position: [0, 0, -1],
		args: ['white', 2],
	},
	top: {
		position: [0, 1, 0],
		args: ['white', 15],
	},
	bottom: {
		position: [0, -1, 0],
		args: ['white', 2],
	},
};

const Lights = () => {
	return (
		<>
			<directionalLight
				position={LIGHT_POSITION.right.position}
				args={LIGHT_POSITION.right.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.left.position}
				args={LIGHT_POSITION.left.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.front.position}
				args={LIGHT_POSITION.front.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.back.position}
				args={LIGHT_POSITION.back.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.top.position}
				args={LIGHT_POSITION.top.args}
			/>
			<directionalLight
				position={LIGHT_POSITION.bottom.position}
				args={LIGHT_POSITION.bottom.args}
			/>
		</>
	);
};

export default Lights;
