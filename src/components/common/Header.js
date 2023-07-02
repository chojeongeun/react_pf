import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
	const active = 'on';
	return (
		<header className={type}>
			<h1>
				<Link to='/'>
					POPULAR
					<br />
					SCIENCE
				</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<NavLink to='/department' activeClassName={active}>
						DEPARTMENT
					</NavLink>
				</li>
				<li>
					<NavLink to='/community' activeClassName={active}>
						COMMUNITY
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeClassName={active}>
						GALLERY
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeClassName={active}>
						YOUTUBE
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName={active}>
						CONTACT
					</NavLink>
				</li>
				<li>
					<NavLink to='/member' activeClassName={active}>
						MEMBER
					</NavLink>
				</li>
			</ul>

			<FontAwesomeIcon icon={faBars} />
		</header>
	);
}

export default Header;
