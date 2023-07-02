import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Contact() {
	const container = useRef(null);
	const { kakao } = window;
	const option = {
		center: new kakao.maps.LatLng(37.56697058676817, 126.97849940948345),
		level: 3,
	};
	useEffect(() => {
		new kakao.maps.Map(container.current, option);
	}, []);
	return (
		<Layout name={'Contact'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Contact;
