import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Repo from './components/Repo';
import './css/style.css';

let trendingRepos;

fetch('https://devo.burakkarakan.com/api/github')
	.then((response) => response.json())
	.then((data) => (trendingRepos = data.data));

async function trend() {
	return await trendingRepos;
}

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
