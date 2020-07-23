import React from 'react';
import '../css/style.css';
import 'font-awesome/css/font-awesome.css';

const Repo = () => {
	return (
		<div className="repo">
			<h2>
				<a
					href={'github.com/'}
					style={{
						color: 'white',
						textDecoration: 'none',
					}}
				>
					dephraiim / dephraiim
				</a>
			</h2>
			<p className="description">Description</p>
			<div className="data">
				<div className="lang">
					<span
						className="langColor"
						style={{
							background: 'red',
						}}
					></span>
					<p>Language</p>
				</div>
				<div className="fork">
					<i className="fa fa-code-fork"></i>
					<span className="num">2356</span>
				</div>
				<div className="star">
					<i className="fa fa-star"></i>
					<span className="num">34</span>
				</div>
				<div className="newStar">
					<i className="fa fa-star"></i>
					<span className="num">
						234 stars today
					</span>
				</div>
			</div>
		</div>
	);
};

export default Repo;
