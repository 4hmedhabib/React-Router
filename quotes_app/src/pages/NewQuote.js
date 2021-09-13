import { useHistory } from 'react-router';
import QuoteForm from '../components/quotes/QuoteForm';
import { addQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';

const NewQuote = () => {
	const { sendingRequest, status } = useHttp(addQuote);

	const history = useHistory();

	useEffect(
		() => {
			if (status === 'compelete') {
				history.push('/quotes');
			}
		},
		[ status, history ]
	);
	const addQuoteHandler = (data) => {
		sendingRequest(data);
	};
	return (
		<div>
			<QuoteForm onAddQuote={addQuoteHandler} />
		</div>
	);
};

export default NewQuote;
