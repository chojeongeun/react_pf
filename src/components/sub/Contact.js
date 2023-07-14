import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
	const container = useRef(null);
	const [Traffic, setTraffic] = useState(false);
	const form = useRef(null);
	const inputName = useRef(null);
	const inputEmail = useRef(null);
	const inputMsg = useRef(null);
	const [Success, setSuccess] = useState(false);
	const { kakao } = window;
	const option = {
		center: new kakao.maps.LatLng(37.56697058676817, 126.97849940948345),
		level: 3,
	};

	//폼메일 함수
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_3imit4s', 'template_rhgnx4p', form.current, 'o_fAtZxqliMlOMCQJ').then(
			(result) => {
				console.log(result.text);
				setSuccess(true);
				inputName.current.value = '';
				inputEmail.current.value = '';
				inputMsg.current.value = '';
			},
			(error) => {
				console.log(error.text);
				setSuccess(false);
			}
		);
	};

	useEffect(() => {
		const mapInstance = new kakao.maps.Map(container.current, option);
		const imgSrc = `${process.env.PUBLIC_URL}/img/marker1.png`; // 마커이미지의 주소입니다
		const imgSize = new kakao.maps.Size(232, 99); // 마커이미지의 크기입니다
		const imgPos = { offset: new kakao.maps.Point(116, 99) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);

		const marker = new kakao.maps.Marker({ position: option.center, image: markerImage });
		mapInstance.setZoomable(false);

		marker.setMap(mapInstance);

		Traffic ? mapInstance.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) : mapInstance.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'CONTACT'}>
			<div id='map' ref={container}></div>
			<button onClick={() => setTraffic(!Traffic)}>{Traffic ? 'Traffic ON' : 'Traffic OFF'}</button>
			<div id='formBox'>
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type='text' name='user_name' ref={inputName} />
					<label>Email</label>
					<input type='email' name='user_email' ref={inputEmail} />
					<label>Message</label>
					<textarea name='message' ref={inputMsg} />
					<input type='submit' value='Send' />
				</form>
				{Success && <p>메일이 성공적으로 발송되었습니다.</p>}
			</div>
		</Layout>
	);
}

export default Contact;
