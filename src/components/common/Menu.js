import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
	const active = { color: 'aqua' };
	const [Open, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1200) setOpen(false);
		});
	}, []);

	useImperativeHandle(ref, () => {
		return { toggle: () => setOpen(!Open) };
	});
	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mobilePanel'
					initial={{ opacity: 0, x: -280 }}
					animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, x: -280, transition: { duration: 0.5 } }}
					onClick={() => setOpen(false)}
				>
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
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
