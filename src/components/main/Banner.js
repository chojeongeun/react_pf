function Banner() {
	return (
		<section id='banner' className='myScroll'>
			<div class='inner'>
				<p>Quite Autors/</p>
				<div class='txtBN'>
					<h1>
						"SOMEWHERE, SOMETHING <span>INCREDIBLE</span> IS WAITING TO BE KNOWN."
					</h1>
					<h2>-Carl Sagan</h2>
				</div>
				<div class='pic'>
					<img src={`${process.env.PUBLIC_URL}/img/pic4.jpg`} alt='pic4.jpg' />
				</div>
			</div>
		</section>
	);
}

export default Banner;
