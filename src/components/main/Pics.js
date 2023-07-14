function Pics() {
	return (
		<section id='pics' className='myScroll'>
			<div className='inner'>
				<h1>TOP IN THE COMMUNITY</h1>
				<div className='wrap'>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic8.jpg`} alt='pic3.jpg' />
						</div>
						<h2>GOODS</h2>
						<h3>Accessories to make your workday productive</h3>
						<p>2.4k</p>
					</article>
					<article>
						<div className='txtBox'>
							<h2>HEALTH</h2>
							<h3>Trouble sleeping? This moon-shaped bedside light might help</h3>
							<p>950</p>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic9.jpg`} alt='pic3.jpg' />
						</div>
						<h2>SPACE</h2>
						<h3>The next era of space travel should include nuclear-powered rockets</h3>
						<p>1.3k</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Pics;
