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
		Traffic
			? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'CONTACT'}>
			<div className='txtwrap'>
				<div id='formBox'>
					<form ref={form} onSubmit={sendEmail}>
						<h3>CONTACT</h3>
						{/* <label>Name</label> */}
						<input type='text' name='user_name' ref={inputName} placeholder='NAME' />
						{/* <label>Email</label> */}
						<input type='email' name='user_email' ref={inputEmail} placeholder='EMAIL' />
						{/* <label>Message</label> */}
						<textarea name='message' ref={inputMsg} placeholder='MESSAGE' />
						<input type='submit' value='Send' />
					</form>
					{Success && <p>메일이 성공적으로 발송되었습니다.</p>}
				</div>

				<article className='Information'>
					<h2>CONTACT INFO</h2>
					<h3>Email Us</h3>
					<p>lorem@google.com</p>
					<h3>Call Us</h3>
					<p>031 345 6789</p>
					<h3>Follow</h3>
					<p>
						<i className='fab fa-twitter'></i>
						<i className='fab fa-facebook'></i>
						<i className='fab fa-instagram'></i>
					</p>
				</article>
			</div>

			<div id='map' ref={container}></div>
			<button onClick={() => setTraffic(!Traffic)} className='trafficBtn'>
				{Traffic ? 'Traffic ON' : 'Traffic OFF'}
			</button>

			<div className='FAQ'>
				<div className='faqTit'>
					<span>FAQ</span>
					<p>Frequently asked question.</p>
				</div>

				<div className='faqTxtwrap'>
					<ul className='btn'>
						<li className='on'>FAQ1</li>
						<li>FAQ2</li>
						<li>FAQ3</li>
					</ul>
					<ul className='box'>
						<li className='on'>
							<p className='question'>Q1. 대중교통으로 경복궁을 방문하려면 어떻게 가야되나요?</p>
							<p className='answer'>
								A1. 지하철의 경우 1,2호선을 이용하여 시청역 5번 출구로 나오시면 됩니다. 버스의 경우 109, 171, 272,
								601번을 타고 경복궁 정거장에서 하차하시면 됩니다.
							</p>
						</li>
						<li>
							<p className='question'>Q2. 서울시청에 자차로 갈 경우 주차장은 협소한가요?</p>
							<p className='answer'>
								A2. 주차공간이 많이 부족하오니 되도록 대중교통을 이용해 주시기 바랍니다.
								주차정보안내시스템(http://parking.seoul.go.kr/)에서 시청 주변 공영주차장을 확인하실 수 있습니다.
							</p>
						</li>
						<li>
							<p className='question'>Q3. 기타 문의사항은 어디에 물어봐야되나요?</p>
							<p className='answer'>A3. OO팀 031-1234-5678 번호로 문의 주시기 바랍니다.</p>
						</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
}

export default Contact;
