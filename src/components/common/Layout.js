import { useEffect, useRef } from 'react';
import React from 'react';

function Layout({ name, children, txt = 'Default' }) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${name}`} ref={frame}>
			<figure></figure>

			<div className='inner'>
				<h1>{name}</h1>
				<p className='innerP'>The popular science magazine.</p>
				{children}
			</div>
		</section>
	);
}

export default Layout;
