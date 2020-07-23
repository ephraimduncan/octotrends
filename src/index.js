import React, { Fragment, useState, useEffect, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Repo from './components/Repo';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './css/style.css';

const App = () => {
	const [trending, getTrending] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://ghapi.huchen.dev/')
			.then((response) => response.json())
			.then((data) => {
				getTrending(data);
				setLoading(false);
			});
	}, []);

	console.log(trending);

	return (
		<div>
			<Navbar />
			<Fragment>
				{loading ? (
					<div className="loading">
						<img
							src="https://enterprise.github.com/assets/spinners/octocat-spinner-128-26a44333917854c6794d55eac947b1277fced54f1f60c5df5d93431db8753bc5.gif"
							width="100"
						/>
					</div>
				) : (
					trending.map(
						(
							{
								author,
								name,
								stars,
								forks,
								description,
								url,
								language,
								languageColor,
							},
							index,
						) => {
							return (
								<Repo
									key={
										index *
										435
									}
									owner={
										author
									}
									name={
										name
									}
									index={
										index +
										1
									}
									link={
										url
									}
									description={
										description
									}
									fork={
										forks
									}
									star={
										stars
									}
									lang={
										language
									}
									langColor={
										languageColor
									}
								/>
							);
						},
					)
				)}
			</Fragment>
			<Footer />
		</div>
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root'),
);
