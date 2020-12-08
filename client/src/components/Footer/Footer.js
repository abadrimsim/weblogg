import React from 'react';
import './Footer.css';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>&copy; {year} Copyright Angel Adrimsim | All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
