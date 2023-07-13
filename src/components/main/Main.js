import React from 'react';
import Header from '../common/Header';
import Visual from './components/main/Visual';
import Banner from './components/main/Banner';
import News from './components/main/News';
import Pics from './components/main/Pics';
import Science from './components/main/Science';
import Goods from './components/main/Goods';

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
