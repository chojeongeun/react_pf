import React from 'react';

function Science() {
	return (
		<section id='science'>
			<div className='inner'>
				<h1>SCIENCE</h1>
				<div className='wrap'>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic10.jpg`} alt='pic10.jpg' />
						</div>
						<h2>NASA and SpaceX pulled off their first rocket launch. Watch every second of it here</h2>
						<p>1 June 2020 By Charlie Wood</p>
					</article>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic11.jpg`} alt='pic11.jpg' />
						</div>
						<h2>Half the matter in the universe was missing. We found it hiding between galaxies</h2>
						<p>31 May 2020 By Prochaska & Macquart</p>
					</article>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/pic12.jpg`} alt='pic12.jpg' />
						</div>
						<h2>The US could shift to 90-percent renewable energy by 2035 at no extra cost</h2>
						<p>31 May 2020 By Jeremy Deaton/Nexus Media</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Science;
