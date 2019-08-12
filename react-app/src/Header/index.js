import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<ul>
				<li><Link to='/'>Login</Link></li>
				<br />
				<li><Link to='/Register'>Register</Link></li>
				<br />
				<li><Link to='/'>Logout</Link></li>
			</ul>
		</header>
		)
}
export default Header;