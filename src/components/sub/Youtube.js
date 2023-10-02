import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Modal from '../common/Modal';

function Youtube() {
	const modal = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);

	const fetchYoutube = async () => {
		const key = 'AIzaSyAzkLv4Fcv1UNbOrmEVhonD6YXHhLjwsC8';
		const list = 'PLWvS8-RhJ_PKwK6LI-fBPArE2muxoT1Qc';
		const num = 9;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;
		const result = await axios.get(url);
		setVids(result.data.items);
	};

	useEffect(() => fetchYoutube(), []);

	return (
		<>
			<Layout name={'YOUTUBE'}>
				{Vids.map((vid, idx) => {
					return (
						<article key={idx}>
							<div
								className='pic'
								onClick={() => {
									modal.current.open();
									setIndex(idx);
								}}
							>
								<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
							</div>
							<div className='boxTxt'>
								<h2>{vid.snippet.title.length > 50 ? vid.snippet.title.substr(0, 50) + '...' : vid.snippet.title}</h2>

								<p>{vid.snippet.description.length > 70 ? vid.snippet.description.substr(0, 70) + '...' : vid.snippet.description}</p>
								<span>{vid.snippet.publishedAt.split('T')[0].split('-').join('.')}</span>
							</div>
						</article>
					);
				})}
			</Layout>

			<Modal ref={modal}>
				<iframe title={Vids[Index]?.id} src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`} frameborder='0'></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
