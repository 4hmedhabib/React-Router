import { Route } from 'react-router-dom';
import MainHeader from '../public/components/MainHeader';
import Products from '../public/pages/Products';
import Welcome from '../public/pages/Welcome';

function App() {
	return (
		<div>
			<MainHeader />
			<Route path="/welcome">
				<Welcome />
			</Route>
			<Route path="/products">
				<Products />
			</Route>
		</div>
	);
}

export default App;
