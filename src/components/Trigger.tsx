import { useEffect } from 'react';

type Props = {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Trigger = ({ setIsLoading }: Props) => {
	useEffect(() => {
		setIsLoading(true);

		return () => {
			setIsLoading(false);
		};
	}, [setIsLoading]);

	return <></>;
};

export default Trigger;
