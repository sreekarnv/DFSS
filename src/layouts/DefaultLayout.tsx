import React from 'react';
import Sidebar from '../components/Sidebar';

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<>
			<Sidebar />
			<div className='wrapper'>
				<div className='content-page'>
					<div className='container-fluid'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default DefaultLayout;
