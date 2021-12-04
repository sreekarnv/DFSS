import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import AppContextProvider from './context/AppContext';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
