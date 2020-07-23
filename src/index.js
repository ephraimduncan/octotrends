import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Repo from './components/Repo';
import './css/style.css';

const App = () => {
	return (
		<div>
			<Navbar />
			<Repo />
		</div>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
