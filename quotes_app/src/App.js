import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { NewQuote, QuoteDetail, Quotes } from './pages';
import NotFound from './pages/NotFound';
function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/quotes" />
				</Route>
				<Route path="/quotes" exact>
					<Quotes />
				</Route>
				<Route path="/new" exact>
					<NewQuote />
				</Route>
				<Route path="/quotes/:quoteId">
					<QuoteDetail />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;