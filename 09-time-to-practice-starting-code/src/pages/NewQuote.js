import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
	const addQuoteHandler = (data) => {
		console.log(data);
	};
	return (
		<div>
			<QuoteForm onAddQuote={addQuoteHandler} />
		</div>
	);
};

export default NewQuote;
