import React from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import Banner from './Banner';
import News from './News';
import Pics from './Pics';
import Science from './Science';
import Goods from './Goods';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Banner />
			<Science />
			<Goods />
		</main>
	);
}

export default Main;
