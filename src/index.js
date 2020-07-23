import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import './css/style.css';

const App = () => {
	return <Navbar />;
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
