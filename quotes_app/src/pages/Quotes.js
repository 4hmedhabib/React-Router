import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const Quotes = () => {
	const { sendRequest, status, error, data: loadedQuote } = useHttp(getAllQuotes, true);

	useEffect(
		() => {
			sendRequest();
		},
		[ sendRequest ]
	);

	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focus">{error}</p>;
	}

	console.log(!loadedQuote, status);

	if (status === 'completed' && (!loadedQuote || loadedQuote.length === 0)) {
		return <NoQuotesFound />;
	}

	return (
		<div>
			{console.log(!loadedQuote)}
			<QuoteList quotes={loadedQuote} />
		</div>
	);
};

export default Quotes;
