import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Sidebar from './components/Sidebar';
import FileUploadPage from './pages/FileUpload';
import HomePage from './pages/Home';
import SharedFilesPage from './pages/SharedFiles';

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<>
			<Loader />
			<Sidebar />
			<div className='wrapper'>
				<div className='content-page'>
					<div className='container-fluid'>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/upload' element={<FileUploadPage />} />
							<Route path='/shared' element={<SharedFilesPage />} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
