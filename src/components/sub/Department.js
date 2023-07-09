import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
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
		</Layout>
	);
}

export default Department;