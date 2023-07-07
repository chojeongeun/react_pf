import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className='upper'>
				<div className='logo'>
					<h1>
						<Link>POP SCI</Link>
					</h1>
					<p>Cookies Settings</p>
					<p>BONNIER</p>
					<p>corporation</p>
				</div>

				<div className='menu'>
					<ul class='All category'>
						<h1>All category</h1>
						<li>
							<NavLink to='/'>Sciencs</NavLink>
						</li>
						<li>
							<NavLink to='/'>Technology</NavLink>
						</li>
						<li>
							<NavLink to='/'>Covid-19</NavLink>
						</li>
					</ul>
					<ul className='Our site'>
						<h1>Our site</h1>
						<li>
							<NavLink to='/'>Subscribe</NavLink>
						</li>
						<li>
							<NavLink to='/'>Give a gift</NavLink>
						</li>
						<li>
							<NavLink to='/'>Newsletter sign up</NavLink>
						</li>
					</ul>
					<ul className='Join us'>
						<h1>Join us</h1>
						<li>
							<NavLink to='/'>Renew Subscription</NavLink>
						</li>
						<li>
							<NavLink to='/'>Sign in</NavLink>
						</li>
						<li>
							<NavLink to='/'>jobs</NavLink>
						</li>
					</ul>
					<ul className='Additionally'>
						<h1>Additionally</h1>
						<li>
							<NavLink to='/'>About magazine</NavLink>
						</li>
						<li>
							<NavLink to='/'>Contact us</NavLink>
						</li>
						<li>
							<NavLink to='/'>Privacy policy</NavLink>
						</li>
					</ul>
				</div>

				<ul className='sns'>
					<h1>Follow us</h1>
					<li>
						<NavLink to='/'>
							<FontAwesomeIcon icon={faUser} />
							<FontAwesomeIcon icon={faEnvelope} />
							<FontAwesomeIcon icon={faComments} />
							<FontAwesomeIcon icon={faPaperPlane} />
						</NavLink>
					</li>
					<li>
						<NavLink to='/'>
							<i class='fa-brands fa-instagram'></i>
						</NavLink>
					</li>
					<li>
						<NavLink to='/'>
							<i class='fa-solid fa-envelope'></i>
						</NavLink>
					</li>
					<li>
						<NavLink to='/'>
							<i class='fa-brands fa-twitter'></i>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className='lower'>
				<p>Copyright &copy; 2020 Popular Science</p>

				<p>A Bonnier Corporation Company. All right reserved. Reproductuon in whole or in part without permission is prohibited.</p>
			</div>
		</footer>
	);
}

export default Footer;

{
	/* <h1>POPULAR SCIENCE</h1>
			<p>2023 DCODELAB &copy; ALL RIGHTS RESERVED.</p> */
}
