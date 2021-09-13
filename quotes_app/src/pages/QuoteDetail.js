import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Hamze Abdi',
		text: 'Learning react is fan!'
	},
	{
		id: 'q2',
		author: 'Ahmed Habib',
		text: 'Learning vue is great!'
	}
];

const QuoteDetail = () => {
	const params = useParams();
	const match = useRouteMatch();

	console.log(match);

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No Quote Found!</p>;
	}

	return (
		<div>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`${match.path}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.url}/comments`}>
				<Comments />
			</Route>
		</div>
	);
};

export default QuoteDetail;
