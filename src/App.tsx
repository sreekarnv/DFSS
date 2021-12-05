import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import FileUploadPage from './pages/FileUpload';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<>
			<Loader />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/upload' element={<FileUploadPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

export default App;
