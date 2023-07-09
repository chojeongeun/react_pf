import React from 'react';

function News() {
	return (
		<section id='news'>
			<div className='inner'>
				<h1>LATEST NEWS</h1>

				<div className='wrap'>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic6.jpg`} alt='pic6.jpg' />
						</div>
						<div className='txt'>
							<h2>ENVIROMENTS</h2>
							<p>Ice sheets can melt much faster than we thought</p>
							<span>8 June 2020 By Ula Chrobak</span>
						</div>
					</article>

					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic2.jpg`} alt='pic2.jpg' />
						</div>
						<div className='txt'>
							<h2>HEALTH</h2>
							<p>Trouble sleeping? This moon-shaped bedside light might help</p>
							<span>12 June 2020 By Rob Verger</span>
						</div>
					</article>

					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic3.jpg`} alt='pic3.jpg' />
						</div>
						<div className='txt'>
							<h2>ENVIROMENTS</h2>
							<p>A simple background photo is forcing Android uers to factory reset smartphones</p>
							<span>8 June 2020 By Stan Horaaczek</span>
						</div>
					</article>

					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic4.jpg`} alt='pic4.jpg' />
						</div>
						<div className='txt'>
							<h2>TECHNOLOGY</h2>
							<p>You should blur the faces in your protest photos. Here's how</p>
							<span>5 June 2020 By Rob Verger</span>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default News;
