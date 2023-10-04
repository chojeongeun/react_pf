import { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faUser, faCircleCheck, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

function Member() {
	const history = useHistory();
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		gender: '',
		interests: [],
		edu: '',
		comments: '',
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);
	const handleChange = (e) => {
		//현재 입력하고 있는 input요소의 name,value값을 비구조화할당으로 뽑아서 출력
		const { name, value } = e.target;
		//기존 초기 Val State값을 deep copy해서 현재 입력하고 있는 항목의 name값과 value값으로 기존 State를 덮어쓰기 해서 변경 (불변성 유지)
		setVal({ ...Val, [name]: value });
	};
	const handleRadio = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};
	const handleCheck = (e) => {
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		//모든 체크박스를 반복돌면서 하나라도 체크되어 있는게 있으면 true값 반환
		let checkArr = [];
		inputs.forEach((el) => {
			if (el.checked) checkArr.push(el.value);
		});
		setVal({ ...Val, [name]: checkArr });
	};

	const handleSelect = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('현재 스테이트값', Val);
		//check가 반환하는 인증 메세지가 있으면 해당 메세지를 화면에 출력하고 전송중지
		//그렇지 않으면 인증 성공
		console.log(check(Val));
		setErr(check(Val));
		setSubmit(true);
	};

	const check = (value) => {
		//인수로 현재 State값을 전달받아서 항목별로 에러메세지를 객체로 반환하는 함수
		//반환되는 에러메세지가 있으면 인증 실패
		//반환되는 에러메세지가 없으면 인증 성공
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;
		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요.';
		}
		if (value.pwd1.length < 5 || !eng.test(value.pwd1) || !num.test(value.pwd1) || !spc.test(value.pwd1)) {
			errs.pwd1 = '비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요.';
		}
		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요.';
		}
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일주소는 8글자 이상 @를 포함하세요.';
		}
		if (!value === '') {
			errs.gender = '성별을 체크해주세요.';
		}

		if (value.edu === '') {
			errs.edu = '최종학력을 선택하세요.';
		}
		if (value.comments.length < 10) {
			errs.comments = '남기는 말을 최소 10글자 이상 입력하세요.';
		}
		return errs;
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('모든 인증을 통과했습니다.');
			history.push('/');
		}
	}, [Err]);

	useEffect(() => {
		console.log(Val);
	}, [Val]);

	return (
		<Layout name={'MEMBER'}>
			<button onClick={() => history.goBack()}>back</button>
			<ul className='join'>
				<li>
					<p className='step'>STEP 1</p>
					<FontAwesomeIcon icon={faUser} />
					<p className='txt'>회원가입</p>
				</li>
				<FontAwesomeIcon icon={faArrowRightLong} />
				<li>
					<p className='step'>STEP 2</p>
					<FontAwesomeIcon icon={faPenToSquare} />
					<p className='txt'>정보입력</p>
				</li>
				<FontAwesomeIcon icon={faArrowRightLong} />
				<li>
					<p className='step'>STEP 3</p>
					<FontAwesomeIcon icon={faCircleCheck} />
					<p className='txt'>가입완료</p>
				</li>
			</ul>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend className='h'>회원가입 폼 양식</legend>
					<h2>회원약관 동의</h2>
					<div className='agreement'>
						<textarea>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi suscipit assumenda consectetur mollitia dolores nisi possimus impedit facilis explicabo vitae quae architecto corrupti
							deserunt, aperiam, non minima aliquid molestias vel necessitatibus quidem obcaecati. Sapiente accusamus nobis neque accusantium deleniti culpa, molestias possimus ea dicta vitae
							obcaecati libero nihil cumque modi.
						</textarea>
						<input type='checkbox' id='terms' name='terms' />
						<label for='terms'>모든 약관을 확인하고 동의합니다.</label>
					</div>

					<table>
						<tbody>
							{/* user id */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>아이디</label>
								</th>
								<td>
									<input type='text' name='userid' id='userid' placeholder='아이디를 입력하세요' onChange={handleChange} value={Val.userid} />
									<br />
									{Err.userid && <p>{Err.userid}</p>}
								</td>
							</tr>
							{/* password */}
							<tr>
								<th>
									<label htmlFor='pwd1'>비밀번호</label>
								</th>
								<td>
									<input type='password' name='pwd1' id='pwd1' placeholder='비밀번호를 입력하세요' onChange={handleChange} value={Val.pwd1} />
									<br />
									{Err.pwd1 && <p>{Err.pwd1}</p>}
								</td>
							</tr>
							{/* re password */}
							<tr>
								<th>
									<label htmlFor='pwd2'>비밀번호 확인</label>
								</th>
								<td>
									<input type='password' name='pwd2' id='pwd2' placeholder='비밀번호를 재입력하세요' onChange={handleChange} value={Val.pwd2} />
									<br />
									{Err.pwd2 && <p>{Err.pwd2}</p>}
								</td>
							</tr>
							{/* e mail */}
							<tr>
								<th>
									<label htmlFor='email'>이메일</label>
								</th>
								<td>
									<input type='text' name='email' id='email' placeholder='이메일주소를 입력하세요' onChange={handleChange} value={Val.email} />
									<br />
									{Err.email && <p>{Err.email}</p>}
								</td>
							</tr>
							{/* gender */}
							<tr>
								<th>성별</th>
								<td>
									<label htmlFor='male'>남자</label>
									<input type='radio' name='gender' value='male' id='mail' onChange={handleRadio} />
									<label htmlFor='female'>여자</label>
									<input type='radio' name='gender' value='female' id='female' onChange={handleRadio} />
									<br />
									{Err.gender && <p>{Err.gender}</p>}
								</td>
							</tr>

							{/* education */}
							<tr>
								<th>
									<label htmlFor='edu'>최종학력</label>
								</th>
								<td>
									<select name='edu' id='edu' onChange={handleSelect}>
										<option value=''>최종학력을 선택하세요.</option>
										<option value='elementary-school'>초등학교 졸업</option>
										<option value='middle-school'>중학교 졸업</option>
										<option value='high-school'>고등학교 졸업</option>
										<option value='college'>대학교 졸업</option>
									</select>
									{Err.edu && <p>{Err.edu}</p>}
								</td>
							</tr>
							{/* comments */}
							<tr>
								<th>
									<label htmlFor='comments'>남기는 말</label>
								</th>
								<td>
									<textarea name='comments' id='comments' cols='30' rows='3' value={Val.comments} onChange={handleChange} placeholder='남기는 말을 입력하세요.'></textarea>
									<br />
									{Err.comments && <p>{Err.comments}</p>}
								</td>
							</tr>

							{/* btn set */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='CANCEL' onClick={() => setVal(initVal)} />
									<input type='submit' value='SEND' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}
export default Member;
