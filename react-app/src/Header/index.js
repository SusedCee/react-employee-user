import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<ul>
				<li><Link to='/'>Register</Link></li>
				<li><Link to='/employee'>Employees</Link></li>
			</ul>
		</header>
		)
}
export default Header;