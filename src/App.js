import { Route, Switch } from 'react-router-dom';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

//main
import Visual from './components/main/Visual';

//sub
import Community from './components/sub/Community';
import Contact from './components/sub/Contact';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Member from './components/sub/Member';
import Youtube from './components/sub/Youtube';
import Banner from './components/main/Banner';
import News from './components/main/News';
import Pics from './components/main/Pics';
import Science from './components/main/Science';
import Goods from './components/main/Goods';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />

					<Visual />
					<News />
					<Pics />
					<Banner />
					<Science />
					<Goods />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department'>
				<Department />
			</Route>

			<Route path='/community'>
				<Community />
			</Route>

			<Route path='/gallery'>
				<Gallery />
			</Route>

			<Route path='/youtube'>
				<Youtube />
			</Route>

			<Route path='/contact'>
				<Contact />
			</Route>

			<Route path='/member'>
				<Member />
			</Route>

			<Footer />
		</>
	);
}

export default App;