import { useParams, Route, Link } from 'react-router-dom';
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

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No Quote Found!</p>;
	}

	return (
		<div>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${quote.id}/`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`/quotes/${quote.id}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`/quotes/${quote.id}/comments`}>
				<Comments />
			</Route>
		</div>
	);
};

export default QuoteDetail;
