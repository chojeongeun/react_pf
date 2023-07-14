import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Visual() {
	return (
		<figure id='visual' className='myScroll'>
			<img src={`${process.env.PUBLIC_URL}/img/pic5.jpg`} alt='' />

			<div className='visualInner'>
				<p>SCIENCE</p>
				<h2>THESE ANIMALS BUILD PALACES OUT OF THEIR OWN SNOT</h2>
				<span>27 May 2020</span>
				<span>By Hanna Seo</span>
				<Link to='/'>READ ON-></Link>
			</div>
		</figure>
	);
}

export default Visual;
