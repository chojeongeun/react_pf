import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

function Header({ type, menu }) {
	const active = 'on';

	return (
		<>
			<header className={type}>
				<div className='inner'>
					<h1>
						<Link to='/'>
							POPULAR
							<br />
							SCIENCE
						</Link>
					</h1>

					<ul id='gnb1'>
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
					</ul>

					<ul id='gnb2'>
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

					<ul id='util'>
						<li>
							<NavLink to='/'>LOG IN</NavLink>
						</li>
						<li>
							<NavLink to='/'>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</NavLink>
						</li>
					</ul>

					<FontAwesomeIcon
						icon={faBars}
						className='btnCall'
						onClick={() => {
							menu.current.toggle();
						}}
					/>
				</div>
			</header>
		</>
	);
}

export default Header;
