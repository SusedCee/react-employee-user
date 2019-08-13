import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.css'

const Header = () => {
	return (
		<header >
			<ul className="header">
				<li><Link className="link" to='/'>Login</Link></li>
				<br />
				<li><Link className="link" to='/Register'>Register</Link></li>
				<br />
				<li><Link className="link" to='/'>Logout</Link></li>
			</ul>
		</header>
		)
}
export default Header;