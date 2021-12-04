import React from 'react';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
	return (
		<>
			<div id='loading'>
				<div id='loading-center' />
			</div>
		</>
	);
};

export default Loader;
