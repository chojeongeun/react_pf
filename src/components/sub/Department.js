import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faHeart, faLaptopCode, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const [Members, setMembers] = useState([]);
	console.log(Members);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((data) => {
			setMembers(data.data.members);
		});
	}, []);
	return (
		<Layout name={'DEPARTMENT'}>
			<section id='upper'>
				<div class='aboutTxt'>
					<h2>OUR STORY</h2>
					<p>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ran- domised words which don't look even
						slightly believable. If you are going to use passage of Lorem, you need to be sure there isn't anything. There are many variations of passages of Lorem Ipsum available, but the majority
						have suffered alteration in some form, by injected humour, ran- domised words which don't look even slightly believable. If you are going to use passage of Lorem, you need to be sure there
						isn't anything.
					</p>
				</div>

				<div class='pic'>
					<img src={process.env.PUBLIC_URL + '/img/pic44.jpg'} alt='pic44' />
				</div>
			</section>

			<section id='middle'>
				<article>
					<FontAwesomeIcon icon={faLaptopCode} />
					<h3>Web Projects</h3>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid.</p>
				</article>
				<article>
					<FontAwesomeIcon icon={faHeart} />
					<h3>Our history</h3>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid.</p>
				</article>
				<article>
					<FontAwesomeIcon icon={faCloudArrowDown} />
					<h3>Development</h3>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid.</p>
				</article>
			</section>

			<section id='lower'>
				<h2>Meet Our Tim</h2>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vel repellat architecto. Provident aut vel nesciunt veritatis in, quis ipsum?</p>
				<div className='wrap'>
					{Members.map((member, idx) => {
						return (
							<>
								<article key={idx}>
									<div className='pic'>
										<img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} />
									</div>
									<h2>{member.name}</h2>
									<p>{member.position}</p>
									<div className='icon'>
										<FontAwesomeIcon icon={faPhone} />
										<FontAwesomeIcon icon={faEnvelope} />
										<FontAwesomeIcon icon={faUser} />
									</div>
								</article>
							</>
						);
					})}
				</div>
			</section>
		</Layout>
	);
}

export default Department;
