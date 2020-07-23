import React from 'react';
import 'font-awesome/css/font-awesome.css';
import '../css/style.css';

const Navbar = () => {
	return (
		<nav>
			<div className="container nav">
				<i
					className="fa fa-github fa-3x"
					style={{ color: 'white' }}
				></i>
				<h1 style={{ marginLeft: 20 }}>
					Github Trending Now.
				</h1>
			</div>
		</nav>
	);
};

export default Navbar;
