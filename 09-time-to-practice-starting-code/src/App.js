import { Switch, Route, Redirect } from 'react-router-dom';
import { NewQuote, QuoteDetail, Quotes } from './pages';
function App() {
	return (
		<Switch>
			<Route path="/" exact>
				<Redirect to="/quotes" />
			</Route>
			<Route path="/quotes" exact>
				<Quotes />
			</Route>
			<Route path="/quotes/new" exact>
				<NewQuote />
			</Route>
			<Route path="/quotes/:quoteId">
				<QuoteDetail />
			</Route>
		</Switch>
	);
}

export default App;
