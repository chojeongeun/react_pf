import React from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import Banner from './Banner';
import News from './News';
import Pics from './Pics';
import Science from './Science';
import Goods from './Goods';
import Btns from './Btns';

function Main({ menu }) {
	return (
		<main>
			<Header type={'main'} menu={menu} />
			<Visual />
			<News />
			<Pics />
			<Banner />
			<Science />
			<Goods />
			<Btns />
		</main>
	);
}

export default Main;
