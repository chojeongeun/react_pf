import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Goods() {
	return (
		<section id='goods'>
			<div className='inner'>
				<h1>GOODS</h1>
				<ul>
					<li>
						<div className='date'>
							<p>21 December</p>
							<p>2020</p>
						</div>
						<div className='txt'>
							<Link>Accessories to make yout workday productive</Link>
							<p>By Billy</p>
						</div>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic7.jpg`} alt='pic7.jpg' />
						</div>
					</li>
					<li>
						<div className='date'>
							<p>18 December</p>
							<p>2020</p>
						</div>
						<div className='txt'>
							<Link>Accessories to make yout workday productive</Link>
							<p>By Billy Cadden</p>
						</div>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic14.jpg`} alt='pic14.jpg' />
						</div>
					</li>
					<li>
						<div className='date'>
							<p>23 December</p>
							<p>By Billy Cadden</p>
						</div>
						<div className='txt'>
							<Link>Accessories to make yout workday productive</Link>
							<p>By Billy Cadden</p>
						</div>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic15.jpg`} alt='pic15.jpg' />
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Goods;
