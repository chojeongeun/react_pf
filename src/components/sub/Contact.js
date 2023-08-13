import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
//import Faq from '../../components/common/Faq';

function Contact() {
	const container = useRef(null);
	const [Traffic, setTraffic] = useState(false);
	const [Location, setLocation] = useState(null);
	const { kakao } = window;
	const option = {
		center: new kakao.maps.LatLng(37.56697058676817, 126.97849940948345),
		level: 3,
	};

	const form = useRef(null);
	const inputName = useRef(null);
	const inputEmail = useRef(null);
	const inputMsg = useRef(null);
	const [Success, setSuccess] = useState(false);

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

	const imgSrc = `${process.env.PUBLIC_URL}/img/marker1.png`; // 마커이미지의 주소입니다
	const imgSize = new kakao.maps.Size(232, 99); // 마커이미지의 크기입니다
	const imgPos = { offset: new kakao.maps.Point(116, 99) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
	const marker = new kakao.maps.Marker({ position: option.center, image: markerImage });

	useEffect(() => {
		const mapInstance = new kakao.maps.Map(container.current, option);
		mapInstance.setZoomable(false); //찾아보기
		marker.setMap(mapInstance);
		mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
		mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
		setLocation(mapInstance);
	}, []);

	useEffect(() => {
		Traffic ? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) : Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'CONTACT'}>
			<div id='map' ref={container}></div>
			<button onClick={() => setTraffic(!Traffic)}>{Traffic ? 'Traffic ON' : 'Traffic OFF'}</button>
			<div className='txtwrap'>
				<div id='formBox'>
					<form ref={form} onSubmit={sendEmail}>
						<h3>CONTACT</h3>
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

				<article class='FAQ'>
					<ul class='btn'>
						<li class='on'>FAQ1</li>
						<li>FAQ2</li>
						<li>FAQ3</li>
					</ul>
					<ul class='box'>
						<li class='on'>
							<p>
								Q1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis?
								<br />
								<br />
								A1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur totam ipsa eos voluptatum quasi aliquam iste velit. Id, iusto quisquam?
							</p>
						</li>
						<li>
							<p>
								Q2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis?
								<br />
								<br />
								A2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur totam ipsa eos voluptatum quasi aliquam iste velit. Id, iusto quisquam?
							</p>
						</li>
						<li>
							<p>
								Q3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis?
								<br />
								<br />
								A3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur totam ipsa eos voluptatum quasi aliquam iste velit. Id, iusto quisquam?
							</p>
						</li>
					</ul>
				</article>
			</div>
		</Layout>
	);
}

export default Contact;
