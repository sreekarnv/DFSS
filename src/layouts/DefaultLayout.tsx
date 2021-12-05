import React from 'react';
import Footer from '../components/Footer';
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
				<Footer />
			</div>
		</>
	);
};

export default DefaultLayout;
