import { Route, Switch } from 'react-router-dom';
import { useRef } from 'react';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Menu from './components/common/Menu';

//main
import Main from './components/main/Main';

//sub
import Community from './components/sub/Community';
import Contact from './components/sub/Contact';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Member from './components/sub/Member';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';

function App() {
	const menu = useRef(null);
	return (
		<>
			<Switch>
				<Route exact path='/' render={() => <Main menu={menu} />} />
				<Route path='/' render={() => <Header type={'sub'} menu={menu} />} />
			</Switch>

			<Route path='/department' component={Department}></Route>

			<Route path='/community' component={Community}></Route>

			<Route path='/gallery' component={Gallery}></Route>

			<Route path='/youtube' component={Youtube}></Route>

			<Route path='/contact' component={Contact}></Route>

			<Route path='/member' component={Member}></Route>

			<Footer />
			<Menu ref={menu} />
		</>
	);
}

export default App;
